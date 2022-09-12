import { useEffect, useState } from "react"
import { ICharacter } from "../models"
import { useCharacters } from "./characters"

interface FilterProps {
    onFilter: (character: ICharacter[]) => void
}

export function useCharacterFilter(/* {onFilter} : FilterProps */) {
    const {character, varCharacter, setVarCharacter} = useCharacters()
    const [statusValue, setStatusValue] = useState('Alive')
    const [filteredCharacter, setFilteredCharacter] = useState<ICharacter[]>([])
    const [fmodalVision, setFModalVision] = useState(false)

    function filterChangeHandler() {
        if (statusValue == 'Alive') {
            setStatusValue('Unknown')
        }
        else if (statusValue == 'Unknown') {setStatusValue('Dead')
        }
        else if (statusValue == 'Dead') {setStatusValue('Alive')
        }
    }

    function filterSubmitHandler() {
        const val = statusValue.toLowerCase()
        const filter = character.filter(character => {
            return character.status.toLowerCase().includes(val);
          })
          console.log(filter)
          /* onFilter(filter) */
          setFilteredCharacter(filter)
          setFModalVision(false)
    }

    function onOpenFilter() {
        setFModalVision(true)
    }

    return {statusValue, filterChangeHandler, filterSubmitHandler, filteredCharacter, fmodalVision, setFModalVision, onOpenFilter}
}