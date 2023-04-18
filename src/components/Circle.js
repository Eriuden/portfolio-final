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
    <div className='circle'>
        <div className="">
            <ul>
                <li onClick={handleModals} 
                    id="language" 
                    className={languageModal ? "active-btn" :null}>Langages et arcanes
                </li>

                <li onClick={handleModals} 
                    id="exp" 
                    className={expModal ? "active-btn" :null}>Mes expériences et projets
                </li>

                <li onClick={handleModals} 
                    id="story" 
                    className={storyModal ? "active-btn" :null}>Mon histoire
                </li>
            </ul>
            {languageModal && <LanguageModal />}
            {expModal && <ExpModal />}
            {storyModal && <StoryModal />}
      </div>
    </div>
  )
}
