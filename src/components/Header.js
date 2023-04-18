import React, { useState } from 'react'
import { Squash as Hamburger } from "hamburger-react"
import Github from "../img/GitHub-Logo.png"
import Linkedin from "../img/LinkedIn-Symbole.png"


export const Header = () => {
    const [hamburger, setHamburger] = useState(false)

  return (
    <div>
        <div className=' mt-5 text-sm sm:text-md md:text-lg lg:text-xl xl: text-xl zone-nom'>
            <h1 className='myName'>Antoine Carrette</h1>
            <h2 className='nickName'>Le magicien du code</h2>
        </div>

        <h2 className='flex m-3' onClick={()=> setHamburger (!hamburger)}>
            <Hamburger color="#FFFFFF"/>
        </h2>

        {hamburger ? (
            /* ce qu'il faut pour l'effet bouquin
            Il faut trouver un moyen d'avoir de fines bordures sur les côtés
            de sorte à imiter les bordures de pages
            un ombrage et bordage précis entre les h3 et p pour l'effet pages
            un background aux couleurs parchemin
            j'ai trouvé des backgrounds de bouquin, testons la chose*/
             
            <nav className='flex flex-col items-start justify-start 
            ml-3.5 absolute opacity-100
            xl: max-w-[45%]  navBook'>
                <ul className=' text-xs sm:text-xs md:text-md lg:text-lg xl: text-xl '>
                    <li className='flex flex-row my-1'>
                        <h3 className='mx-6 mt-4 mb-4'>M'envoyer un Hibou</h3>
                        <p className=' xs:ml-[20%] sm:ml-[8%] md:ml-[15%] lg:ml-[8%] 2xl:ml-[13%] mt-4 mb-4  '>antoinecarrette@hotmail.fr</p>
                    </li>

                    
                    
                    <li className='flex flex-row my-2'>
                        <h3 className='mx-6 mt-4 mb-4'>Appel télépathique</h3>
                        <br/>
                        <p className='xs:ml-[20%] sm:ml-[10%] md:ml-[17%] lg:ml-[12%] 2xl:ml-[15%] mt-4 mb-4  '>06.24.66.24.51</p>
                    </li>

                    

                    <li className='flex flex-row my-2'>
                        <h3 className='ml-6 mt-4 mb-4 '>Chambre du conseil</h3>
                        <a className="ml-10" href="https://www.linkedin.com/in/antoine-carrette-070401b3/">
                            <img src={Linkedin} alt="linkedin" className="xs:ml-[20%] sm:ml-[24%] md:ml-[28%] lg:ml-[28%] 2xl:ml-[25%] max-w-[30%] max-h-[30%] mt-4 mb-4  "/>
		                </a>
                    </li>

                   

                    <li className='flex flex-row my-2'>
                        <h3 className='mx-6 flex flex-row'>Ma tour</h3>
                        <a className="ml-10" href="https://github.com/Eriuden">
                            <img src={Github} alt="github" className="max-w-[35%] max-h-[35%] xs:ml-[20%] sm:ml-[24%] md:ml-[28%] lg:ml-[30%] 2xl:ml-[25%] mt-1 mb-4 "/>
                        </a>
                    </li>    

                </ul>
                
                

            </nav>
        ) : ""}
        
    </div>
  )
}
