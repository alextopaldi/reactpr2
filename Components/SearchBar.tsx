import axios from "axios"
import { useState } from "react"
import { useCharacterFilter } from "../hooks/characterFilter"
import { useCharacters } from "../hooks/characters"
import { ICharacter } from "../models"
import { Character } from "./Character"

interface SearchProps {
    onOpen: () => void
    onSearch: (character: ICharacter[]) => void
    onClear: () => void
}

export function SearchBar({onOpen, onSearch, onClear} : SearchProps) {

    

    const [searchValue, setSearchValue] = useState('')
    const [valueVision, setValueVision] = useState(false)
    const {character, setVarCharacter} = useCharacters()



    function SearchHandler() {
        const val = searchValue.toLowerCase()
        const filter = character.filter(character => {
            return character.name.toLowerCase().includes(val);
          })
        setValueVision(true)
        onSearch(filter)
    }

    const ClickHandler = () => {
        setValueVision(false)
        onClear()
        setSearchValue('')
    }

    return (
        <div>
            <div className="flex">
              <input type="text" placeholder="Enter name..." className="border py-2 px-4 block w-[100%] outline-0" 
              value={searchValue} 
              onChange={event => setSearchValue(event.target.value)}
              onClick={() => setValueVision(false)}/>
              <button className="py-2 px-4 bg-red-400 opacity-90 hover:opacity-100 border text-white" onClick={ClickHandler}>X</button>
              <button className="py-2 px-4 bg-green-600 opacity-90 hover:opacity-100 border w-[100px]" onClick={SearchHandler}>Search</button>
              <button className="py-2 px-4 bg-green-600 opacity-90 hover:opacity-100 border w-[100px]" onClick={() => onOpen}>Filter</button>
            </div>
            {valueVision && <div className="flex justify-center">
                <p className="font-bold ">Results by name: {searchValue}</p>
            </div>}
            {/* {<div className="mx-auto max-w-1xl pt-5 flex flex-wrap justify-center">
                {fcharacter.map(charact => <Character character={charact} key={charact.id}/>)}
            </div>} */}
        </div>
    )
}