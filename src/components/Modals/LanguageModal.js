import React from 'react'
import { useState } from 'react'
import"../../Modal.css";

export const LanguageModal = ({props}) => {
  const [isOpen, setIsOpen] = useState(true)

    const close =() => {
      setIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? (
          <div className='modalBackground'>
            <div className='modalContainer'>
                <h2 className='title'>LanguageModal</h2>
                <button className='titleCloseBtn' onClick={close}>X</button>              
            </div>
          </div>
        ): ""}
    </>
    
  )
}
