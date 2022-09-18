import axios from "axios"
import { useState } from "react"
import { useCharacters } from "../hooks/characters"
import { ICharacter } from "../models"
import { Character } from "./Character"

interface SearchProps {
    onOpenFilter: () => void
    onSearch: (character: ICharacter[]) => void
    onClear: () => void
}

export function SearchBar({onOpenFilter, onSearch, onClear} : SearchProps) {

    

    const [searchValue, setSearchValue] = useState('')
    const [valueVision, setValueVision] = useState(false)
    const {character, setVarCharacter} = useCharacters()
    const [error, setError] = useState('')



    function SearchHandler() {
        const val = searchValue.toLowerCase()
        if (val.trim().length == 0) {
            setError('Enter valid name.')
            return
        }
        const filter = character.filter(character => {
            return character.name.toLowerCase().includes(val);
          })
        setValueVision(true)
        onSearch(filter)
        setError('')
    }

    const ClickHandler = () => {
        setValueVision(false)
        onClear()
        setSearchValue('')
    }

    return (
        <div>
            <div className="flex">
              <input type="text" placeholder="Enter name..." className="border py-2 px-4 block w-[100%] outline-0 bg-zinc-800 text-white border-black" 
              value={searchValue} 
              onChange={event => setSearchValue(event.target.value)}
              onClick={() => setValueVision(false)}/>
              <button className="py-2 px-4 bg-red-400 opacity-90 hover:opacity-100 border text-white border-black" onClick={ClickHandler}>X</button>
              <button className="py-2 px-4 bg-zinc-800 opacity-90 hover:opacity-100 border w-[100px] text-white border-black" onClick={SearchHandler}>Search</button>
              <button className="py-2 px-4 bg-zinc-800 opacity-90 hover:opacity-100 border w-[100px] text-white border-black" onClick={onOpenFilter}>Filter</button>
            </div>
            {valueVision && <div className="flex justify-center">
                <p className="font-bold text-white">Results by name: {searchValue}</p>
            </div>}
            {/* {<div className="mx-auto max-w-1xl pt-5 flex flex-wrap justify-center">
                {fcharacter.map(charact => <Character character={charact} key={charact.id}/>)}
            </div>} */}
            {error && <p className="text-center text-red-500">{error}</p>}
        </div>
    )
}