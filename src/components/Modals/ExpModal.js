import React, { useState } from 'react';
import"../../Modal.css";

export const ExpModal = ({props}) => {
    const [isOpen, setIsOpen] = useState(true)

    const close =() => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        {isOpen ? (
            <div className='modalBackground'>
                <div className='modalContainer'>
                    <h2>ExpModal</h2>
                    <button onClick={close}>X</button>
                </div>
            </div>
        ): ""}
    </>
    
  )
}
