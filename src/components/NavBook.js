
import React, { useState } from 'react'
import { Squash as Hamburger } from "hamburger-react"
import Github from "../img/GitHub-Logo.png"
import Linkedin from "../img/LinkedIn-Symbole.png"

export const NavBook = () => {
    const [hamburger, setHamburger] = useState(false)
  return (
    <div className='sticky top-0'>
        <h2 className='flex m-3' onClick={()=> setHamburger (!hamburger)}>
            <Hamburger color="#FFFFFF"/>
        </h2>

        {hamburger ? (
            /* Globalement le grimoire tient bien, mais un point faible
            pas n'importe quel point faible, il vient techniquement de tailwind
            puisque celui ci, gêne entre 500-280 px de large pour le mail
            J'ai une solution temporaire grâce au media querie, c'est responsive
            mais trop petit, et donc, exige le zoom
            Globalement, comme beaucoup d'éléments du site, un responsive hardu,
            Le Galaxy fold surtout, avec son écran fin comme une tige, est un problème ! */
             
            <nav className='flex flex-col items-start justify-start 
            ml-3.5 absolute opacity-100
             md:max-w-[55%] xl:max-w-[45%]  navBook'>
                <ul className=' text-xs sm:text-xs md:text-md lg:text-lg xl:text-xl '>
                    <li className='flex flex-row my-1   '>
                        <h3 className='mx-4 mt-4 sm:mb-2  '>M'envoyer un Hibou</h3>
                        <p className='mail ml-[8%] sm:ml-[20%] md:ml-[20%] lg:ml-[7%] 2xl:ml-[10%] mt-4 sm:mb-2  '>antoinecarrette@hotmail.fr</p>
                    </li>

                    
                    
                    <li className='flex flex-row my-2 '>
                        <h3 className='mx-6 sm:mt-4 sm:mb-4 '>Appel télépathique</h3>
                        <br/>
                        <p className=' phone ml-[8%] sm:ml-[20%] md:ml-[17%] lg:ml-[12%] 2xl:ml-[15%] sm:mt-4 sm:mb-2  '>06.24.66.24.51</p>
                    </li>

                    

                    <li className='flex flex-row my-2'>
                        <h3 className='ml-6 sm:mt-4 sm:mb-4 '>Chambre du conseil</h3>
                        <a className=" ml-24 sm:ml-12" href="https://www.linkedin.com/in/antoine-carrette-070401b3/">
                            <img src={Linkedin} alt="linkedin" className="xs:ml-[20%] sm:ml-[24%] md:ml-[28%] lg:ml-[28%] 2xl:ml-[25%] max-w-[30%] max-h-[30%] mt-4 mb-4  "/>
		                </a>
                    </li>

                   

                    <li className='flex flex-row my-2'>
                        <h3 className='mx-6 sm:mt-4 sm:mb-4 md:mt-2 md:mb-2'>Ma tour</h3>
                        <a className=" ml-24 sm:ml-12" href="https://github.com/Eriuden">
                            <img src={Github} alt="github" className="max-w-[35%] max-h-[35%] xs:ml-[20%] sm:ml-[24%] md:ml-[28%] lg:ml-[30%] 2xl:ml-[25%] mt-1 mb-4 "/>
                        </a>
                    </li>    

                </ul>
                
                

            </nav>
        ) : ""}
    </div>
  )
}
