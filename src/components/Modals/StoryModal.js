import React from 'react'
import { useState } from 'react'
import"../../Modal.css";

export const StoryModal = ({props}) => {
    const [isOpen, setIsOpen] = useState(true)

    const close =() => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? (
          <div className='modalBackground'>
            <div className='modalContainer'>
                <h2 className='title'>StoryModal</h2>
                <button onClick={close}>X</button>
            </div>
          </div>
        ): ""}
    </>
    
  )
}
