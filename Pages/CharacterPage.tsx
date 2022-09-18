import { useEffect, useState } from "react"
import { Character } from "../Components/Character"
import { CharacterInfo } from "../Components/CharacterInfo"
import { FilterModal } from "../Components/FilterModal"
import { Modal } from "../Components/Modal"
import { SearchBar } from "../Components/SearchBar"
import { useCharacters } from "../hooks/characters"
import { ICharacter } from "../models"
import { CSSTransition } from 'react-transition-group';
import  '../Components/App.css'

export function CharacterPage() {
  const {character, loading, error, varCharacter, searchCharacter, setVarCharacter, filterCharacter} = useCharacters()
  const [fmodalVision, setFModalVision] = useState(false)
  const [modal, setModal] = useState(false)
  const [id, setId] = useState(0)

  const openHandler = (id: number) => {
    setModal(true)
    setId(id)
  }

  const openHandlerSearch = (character: ICharacter[]) => {
    searchCharacter(character)
  }

  const openHandlerFilter = (character: ICharacter[]) => {
    filterCharacter(character)
  }

  const clearHandler = () => {
    setVarCharacter(character)
  }

  

  return (
    <div className="container mx-auto max-w-1xl pt-5">
      {loading && <p className="text-center font-bold">Loading data...</p>}
      {error && <p className="text-center font-bold">{error}</p>}
      <SearchBar onOpenFilter={() => setFModalVision(true)} onSearch={openHandlerSearch} onClear={clearHandler}/>
      <div className="mx-auto max-w-1xl flex flex-wrap justify-center">
          {(varCharacter).map(charact => <Character character={charact} key={charact.id} onOpen={openHandler}/>)} 
      </div>
      <CSSTransition in={modal} timeout={2000} classNames="my-node">
      <div className="my-node">
      { modal && <Modal onClose={() => setModal(false)}>
      {varCharacter.filter(character => character.id == id).map(filteredCharacter => (<CharacterInfo character={filteredCharacter} key={filteredCharacter.id}/>))}
      </Modal>}
      </div>
      </CSSTransition>
      <CSSTransition in={fmodalVision} timeout={2000} classNames="my-node" unmountOnExit mountOnEnter>
      <div className="my-node">
      {fmodalVision && <FilterModal onClose={() => setFModalVision(false)} onFilter={openHandlerFilter}/>}
      </div>
      </CSSTransition>
      {/* <EpisodesCharacter/> */}
    </div>
  );
}