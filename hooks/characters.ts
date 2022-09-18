import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { ICharacter, IEpisode } from "../models"

interface useCharactersProps {
  onSearchCharacters?: (character : ICharacter[]) => void
}

export function useCharacters() {
    async function fetchPerss() {
        try {
          setError('')
          setLoading(true)
          const response = await axios.get('https://rickandmortyapi.com/api/character')
          setCharacter(response.data.results)
          setVarCharacter(response.data.results)
          setLoading(false)
        } catch (e) {
          setLoading(false)
          const err = e as AxiosError
          setError(err.message)
        }
      }

      async function fetchEpisodes() {
        try {
          setError('')
          const response = await axios.get('https://rickandmortyapi.com/api/episode')
          setEpisode(response.data.results)
        } catch (e) {
          const err = e as AxiosError
          setError(err.message)
        }
      }

      function searchCharacter(characterS: ICharacter[]) {
        setVarCharacter(characterS)
      }

      function filterCharacter(characterF: ICharacter[]) {
        setVarCharacter(characterF)
      }
    
      const [character, setCharacter] = useState<ICharacter[]>([])
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState('')
      const [varCharacter, setVarCharacter] = useState<ICharacter[]>([])
      const [searched, setSearched] = useState(false)
      const [episode, setEpisode] = useState<IEpisode[]>([])
    
      useEffect( () => {
        fetchPerss()
        fetchEpisodes()
      }, [])
      return {character, loading, error, varCharacter, setVarCharacter, setCharacter, searchCharacter, filterCharacter, searched, episode}
}