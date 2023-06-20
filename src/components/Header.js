import React, { useState } from 'react'
import { Squash as Hamburger } from "hamburger-react"
import Github from "../img/GitHub-Logo.png"
import Linkedin from "../img/LinkedIn-Symbole.png"


export const Header = () => {
    const [hamburger, setHamburger] = useState(false)

  return (
    <div>
        <div className=' mt-5 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl zone-nom'>
            <h1 className='myName'>Antoine Carrette</h1>
            <h2 className='nickName'>Le magicien du code</h2>
        </div>

        
        
    </div>
  )
}
