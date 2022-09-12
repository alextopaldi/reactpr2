import { useEffect, useState } from "react"
import { Character } from "../Components/Character"
import { CharacterInfo } from "../Components/CharacterInfo"
import { FilterModal } from "../Components/FilterModal"
import { Modal } from "../Components/Modal"
import { SearchBar } from "../Components/SearchBar"
import { useCharacterFilter } from "../hooks/characterFilter"
import { useCharacters } from "../hooks/characters"
import { useCharacterSearch } from "../hooks/characterSearch"
import { ICharacter } from "../models"

export function CharacterPage() {
  const {character, loading, error, varCharacter, searchCharacter, setVarCharacter} = useCharacters()
  const {fmodalVision, setFModalVision} = useCharacterFilter()
  const [modal, setModal] = useState(false)
  const [id, setId] = useState(0)

  const openHandler = (id: number) => {
    setModal(true)
    setId(id)
  }

  const openHandlerSearch = (character: ICharacter[]) => {
    searchCharacter(character)
  }

  const clearHandler = () => {
    setVarCharacter(character)
  }

  

  return (
    <div className="container mx-auto max-w-1xl pt-5">
      {loading && <p className="text-center font-bold">Loading data...</p>}
      {error && <p className="text-center font-bold">{error}</p>}
      <SearchBar onOpen={() => setFModalVision(true)} onSearch={openHandlerSearch} onClear={clearHandler}/>
      <div className="mx-auto max-w-1xl flex flex-wrap justify-center">
          {(varCharacter).map(charact => <Character character={charact} key={charact.id} onOpen={openHandler}/>)} 
      </div>
      { modal && <Modal onClose={() => setModal(false)}>
      {varCharacter.filter(character => character.id == id).map(filteredCharacter => (<CharacterInfo character={filteredCharacter}/>))}
      </Modal>}
      {(fmodalVision) && <FilterModal onClose={() => setFModalVision(false)}/>}
    </div>
  );
}