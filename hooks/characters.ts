import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { ICharacter } from "../models"

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

      function searchCharacter(character: ICharacter[]) {
        setVarCharacter(character)
      }
    
      const [character, setCharacter] = useState<ICharacter[]>([])
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState('')
      const [varCharacter, setVarCharacter] = useState<ICharacter[]>([])
    
      useEffect( () => {
        fetchPerss()
      }, [])
      return {character, loading, error, varCharacter, setVarCharacter, setCharacter, searchCharacter}
}