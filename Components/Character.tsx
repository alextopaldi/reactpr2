import { ICharacter } from "../models"
import { Modal } from "./Modal"

interface CharacterProps {
    character: ICharacter
    onOpen? : (id : number) => void
}

export function Character(props: CharacterProps) { 

    return (
        <div className="border border-black py-2 px-4 inline-block m-auto mx-5 my-2">
            <img src={props.character.image} alt={props.character.name} />
            <p className="text-center font-bold text-white">{props.character.name}</p>
            <button onClick={() => {props.onOpen?.(props.character.id)}} className=" block m-auto py-2 px-4 border border-black bg-zinc-800 text-white my-2 opacity-90 hover:opacity-100">More info</button>
        </div>
    )
}