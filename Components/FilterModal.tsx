import { useState } from "react"
import { useCharacterFilter } from "../hooks/characterFilter"
import { useCharacters } from "../hooks/characters"
import { ICharacter } from "../models"
import { Character } from "./Character"

interface FilterProps {
    onClose : () => void
}

export function FilterModal({onClose} : FilterProps) {

    const {filterChangeHandler, filterSubmitHandler, statusValue, filteredCharacter} = useCharacterFilter()
    

    return(
        <div className="fixed bg-black/50 bottom-0 right-0 left-0 top-0">
            <div className="w-[250px] p-5 rounded bg-white absolute top-10 left-1/2 flex justify-center ml-[500px] mt-[100px] items-center flex-wrap"> 
                <p className="mr-4">Status:</p>
                <button onClick={filterChangeHandler} className="py-1 px-6 bg-green-600 opacity-90 hover:opacity-100 border w-[130px]">{statusValue}</button>
                <button 
                onClick={() => 
                    {filterSubmitHandler()
                     onClose()}} 
                     className="py-2 px-4 bg-green-600 opacity-90 hover:opacity-100 border w-[100px] mt-10">Submit</button>
            </div>
        </div>
        
    )
}