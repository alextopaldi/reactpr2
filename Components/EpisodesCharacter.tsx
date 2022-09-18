import axios from "axios"
import { useState } from "react"
import { ICharacter, IEpisode } from "../models"
import { Episode } from "./Episode"

interface ModalProps {
    character : ICharacter

}

export function EpisodesCharacter() {

    const [episodes, setEpisodes] = useState([])

    

    return(
        <div className="fixed bg-black/50 bottom-0 right-0 left-0 top-0">
            <div className="w-[250px] p-5 rounded absolute top-10 left-1/2 flex justify-center ml-[500px] mt-[500px] items-center flex-wrap bg-zinc-800 text-white"> 
                
            </div>
        </div>
    )
}