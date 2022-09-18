import { useState } from "react"
import { useCharacters } from "../hooks/characters"
import { ICharacter } from "../models"

interface FilterProps {
    onClose : () => void
    onFilter: (character: ICharacter[]) => void
}

export function FilterModal({onClose, onFilter} : FilterProps) {

    const [statusValue, setStatusValue] = useState('Alive')
    const [gender, setGender] = useState('Male')
    const {character} = useCharacters()
    const [filterOn, setFilterOn] = useState(false)
    const [filter1On, setFilter1On] = useState(false)
    


    function filterChangeHandler() {
        setFilterOn(true)
        if (statusValue == 'Alive') {
            setStatusValue('Unknown')
        }
        else if (statusValue == 'Unknown') {setStatusValue('Dead')
        }
        else if (statusValue == 'Dead') {setStatusValue('Alive')
        }
    }

    function genderChangeHandler() {
        setFilter1On(true)
        if (gender == 'Male') {
            setGender('Female')
        }
        else if (gender == 'Female') {setGender('Unknown')
        }
        else if (gender == 'Unknown') {setGender('Male')
        }
    }

    function filterSubmitHandler() {
        const val1 = statusValue.toLowerCase()
        const val2 = gender.toLowerCase()
        if (!filter1On && !filterOn) {
            onFilter(character)
        }
        else if (filter1On && filterOn) {
            const filter = character.filter(character => {
                return character.status.toLowerCase().includes(val1);
              })
              const filter2 = filter.filter(character => {
                return character.gender.toLowerCase() == val2;
              })
              console.log(val2)
              onFilter(filter2)
        }
        else if (!filter1On && filterOn) {
            const filter = character.filter(character => {
                return character.status.toLowerCase().includes(val1);
              })
              onFilter(filter)
        }
        else if (filter1On && !filterOn) {
            const filter2 = character.filter(character => {
                return character.gender.toLowerCase() == val2;
              })
              onFilter(filter2)
        }
    }

    const btnBgClass = filterOn? 'bg-green-500' : 'bg-white'
    const btnClasses = ['text-white font-bold py-2 px-2 ml-4 rounded-full', btnBgClass]

    const btn2BgClass = filter1On? 'bg-green-500' : 'bg-white'
    const btn2Classes = ['text-white font-bold py-2 px-2 ml-4 rounded-full mt-5', btn2BgClass]

    const btnOpClass = filterOn? 'opacity-100' : 'opacity-50'
    const btnOpClasses = ['py-1 px-6 bg-zinc-700 border w-[120px]', btnOpClass]

    const btn2OpClass = filter1On? 'opacity-100' : 'opacity-50'
    const btn2OpClasses = ['py-1 px-6 bg-zinc-700 border w-[120px] mt-5', btn2OpClass]

    const text1Class = filterOn? '' : 'line-through'
    const text1Classes = ["mr-4", text1Class]
    
    const text2Class = filter1On? '' : 'line-through'
    const text2Classes = ["mr-4 mt-5", text2Class]

    return(
        <div className="fixed bg-black/50 bottom-0 right-0 left-0 top-0">
            <div className="w-[300px] p-5 rounded absolute top-10 left-1/2 flex justify-center ml-[500px] mt-[100px] items-center flex-wrap bg-zinc-800 text-white"> 
                <p className={text1Classes.join(' ')}>Status:</p>
                <button onClick={filterChangeHandler} className={btnOpClasses.join(' ')}>{statusValue}</button>
                <button className={btnClasses.join(' ')} onClick={() => setFilterOn(prev => !prev)}></button>
                <p className={text2Classes.join(' ')}>Gender:</p>
                <button onClick={genderChangeHandler} className={btn2OpClasses.join(' ')}>{gender}</button>
                <button className={btn2Classes.join(' ')} onClick={() => setFilter1On(prev => !prev)}></button>
                <button 
                onClick={() => 
                    {filterSubmitHandler()
                     onClose()}} 
                     className="py-2 px-4 bg-zinc-700 opacity-90 hover:opacity-100 border w-[100px] mt-10">Submit</button>
            </div>
        </div>
        
    )
}