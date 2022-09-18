import axios from "axios"
import { useEffect, useState } from "react"
import { ICharacter, IEpisode } from "../models"
/* import { CSSTransition } from 'react-transition-group'; */

interface CharacterInfoProps {
    character: ICharacter
}

export function CharacterInfo(props: CharacterInfoProps) {

    const [episode, setEpisode] = useState<IEpisode>()

    async function fetchEpisode() {
        const response = await axios.get(props.character.episode[0])
        console.log(response)
        setEpisode(response.data)
    }

    useEffect( () => {
        fetchEpisode()
      }, [])

    return (
        <div className=" py-2 px-4 inline-block m-auto mx-5 my-2 text-center bg-zinc-800 text-white">
            <img src={props.character.image} alt={props.character.name}/>
            <p className="font-bold">{props.character.name}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Location: {props.character.location.name}</p>
            <p>Origin: {props.character.origin.name}</p>
            <p>Status: {props.character.status}</p>
            <p>First seen: {episode?.name}</p>
        </div>
    )
}