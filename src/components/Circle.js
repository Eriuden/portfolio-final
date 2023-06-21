import React, { useState } from 'react'
import { ExpModal } from './Modals/ExpModal'
import { LanguageModal } from './Modals/LanguageModal'
import { StoryModal } from './Modals/StoryModal'

export const Circle = (props) => {
    const [languageModal, setLanguageModal] = useState(false)
    const [expModal, setExpModal] = useState(false)
    const [storyModal, setStoryModal] = useState(false)

    const handleModals = (e) => {
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
      }

  return (
    <div className='circle max-w-full '>
        <div className="circle-nav max-h-full">
            <ul className="flex flex-row justify-around max-h-full text-sm sm:text-lg">
                <li onClick={handleModals} 
                    id="language" 
                    className="mx-6 ">Langages et arcanes
                </li>

                <li onClick={handleModals} 
                    id="exp" 
                    className="mx-6 ">Mes expériences et projets
                </li>

                <li onClick={handleModals} 
                    id="story" 
                    className="mx-6 ">Mon histoire
                </li>
            </ul>
            {languageModal && <LanguageModal />}
            {expModal && <ExpModal />}
            {storyModal && <StoryModal />}
      </div>
    </div>
  )
}
