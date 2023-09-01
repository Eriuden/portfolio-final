import React, { useState} from 'react'
import { ExpModal } from './Modals/ExpModal'
import { LanguageModal } from './Modals/LanguageModal'
import { StoryModal } from './Modals/StoryModal'


//Alors coco, toi en css, tu vas être un boss final !
//Si je fait tout le css que je désire pour lui,
// qu'on me dise pas que c'est pas mon truc !
export const Circle = () => {
    const [languageModal, setLanguageModal] = useState(false)
    const [expModal, setExpModal] = useState(false)
    const [storyModal, setStoryModal] = useState(false)

    const handleModals = (e) => {
        setTimeout(()=> {
            if (e.target.id === "language"){
                setExpModal(false)
                setStoryModal(false)
                setLanguageModal(!languageModal)
            } else if(e.target.id === "exp") {
                setExpModal(!expModal)
                setStoryModal(false)
                setLanguageModal(false)
            }
            else if(e.target.id === "story") {
                setExpModal(false)
                setStoryModal(!storyModal)
                setLanguageModal(false)
            }
        },50)   
      }

  return (
    <div className='circle max-w-full '>
        <div className="circle-nav max-h-full">
            <ul className=" flex flex-row justify-around mx-12 max-h-full sm:text-lg text-blue-300">
                <li onClick={handleModals} 
                    id="language" 
                    className="mx-2 ">Langages et arcanes
                </li>

                <li onClick={handleModals} 
                    id="exp" 
                    className="mx-2 self-end">Mes expériences et projets
                </li>

                <li onClick={handleModals} 
                    id="story" 
                    className="mx-2 ">Mon histoire
                </li>
            </ul>
            {languageModal && <LanguageModal />}
            {expModal && <ExpModal />}
            {storyModal && <StoryModal />}
      </div>
    </div>
  )
}
