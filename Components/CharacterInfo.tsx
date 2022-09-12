import { ICharacter } from "../models"

interface CharacterInfoProps {
    character: ICharacter
}

export function CharacterInfo(props: CharacterInfoProps) {
    return (
        <div className="border py-2 px-4 inline-block m-auto mx-5 my-2 text-center">
            <img src={props.character.image} alt={props.character.name}/>
            <p className="font-bold">{props.character.name}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Location: {props.character.location.name}</p>
            <p>Origin: {props.character.origin.name}</p>
            <p>Status: {props.character.status}</p>
        </div>
    )
}