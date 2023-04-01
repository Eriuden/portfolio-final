import React, { useState } from 'react'
import { Squash as Hamburger } from "hamburger-react"
import Github from "../img/GitHub-Logo.png"
import Linkedin from "../img/LinkedIn-Symbole.png"

export const Header = () => {
    const [hamburger, setHamburger] = useState(false)

  return (
    <div>
        <div className='zone-nom'>
            <h1>Antoine Carrette</h1>
            <h2>Le magicien du code</h2>
        </div>

        <h2 className='flex m-3' onClick={()=> setHamburger (!hamburger)}>
            <Hamburger/>
        </h2>

        {hamburger ? (
            <nav className='flex flex-col items-start justify-start border-spacing-1
            ml-3.5 absolute border-2 border-black bg-slate-50 opacity-100
            max-w-[25%] max-h-[25%]'>
                <ul>
                    <li className='flex flex-row my-2'>
                        <h3 className='mx-2'>M'envoyer un Hibou</h3>
                        <p className='mr-2'>antoinecarrette@hotmail.fr</p>
                    </li>
                    
                    <li className='flex flex-row my-2'>
                        <h3 className='mx-2'>Appel télépathique</h3>
                        <br/>
                        <p>0624662451</p>
                    </li>

                    <li className='flex flex-row my-2'>
                        <h3 className='mx-2 flex flex-row'>Chambre du conseil</h3>
                        <a className="ml-10" href="https://www.linkedin.com/in/antoine-carrette-070401b3/">
                            <img src={Linkedin} alt="linkedin" className="max-w-[40%] max-h-[40%]"/>
		                </a>
                    </li>

                    <li className='flex flex-row my-2'>
                        <h3 className='mx-2 flex flex-row'>Ma tour</h3>
                        <a className="ml-10" href="https://github.com/Eriuden">
                            <img src={Github} alt="github" className="max-w-[40%] max-h-[40%]"/>
                        </a>
                    </li>    

                </ul>

            </nav>
        ) : ""}
        
    </div>
  )
}
