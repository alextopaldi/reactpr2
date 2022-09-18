import {IEpisode } from "../models"

interface ModalProps {
    episode : IEpisode
}

export function Episode({episode} : ModalProps) {
    return(
        <div>
            <p>{episode.name}</p>
        </div>
    )
}