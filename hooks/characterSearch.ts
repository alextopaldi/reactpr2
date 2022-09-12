import { useEffect, useState } from "react"
import { ICharacter } from "../models"
import { useCharacters } from "./characters"


export function useCharacterSearch() {
    /* const [searchValue, setSearchValue] = useState('')
    const [fcharacter, setfCharacter] = useState<ICharacter[]>([])
    const [valueVision, setValueVision] = useState(false)
    const {character, setVarCharacter, varCharacter} = useCharacters()
    const [filCharacter, setFilCharacter] = useState<ICharacter[]>([])

    function SearchHandler() {
        const val = searchValue.toLowerCase()
        const filter = character.filter(character => {
            return character.name.toLowerCase().includes(val);
          })
        setfCharacter(filter)
        setValueVision(true)
    }

    

    return {searchValue, fcharacter, SearchHandler, setSearchValue, valueVision, setValueVision, varCharacter, filCharacter} */
}