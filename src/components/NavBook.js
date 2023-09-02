
import React, { useState, useEffect } from 'react'
import { Squash as Hamburger } from "hamburger-react"
import Github from "../img/GitHub-Logo.png"
import Linkedin from "../img/LinkedIn-Symbole.png"

export const NavBook = () => {
    const [hamburger, setHamburger] = useState(false)
    const [navSize, setNavSize] = useState(0)

    useEffect(() => {
        if (hamburger) {
          const timer = setTimeout(() => {
            setNavSize(45);
          }, 75);
          
          return () => clearTimeout(timer);
        } else {
          
          setNavSize(0);
        }
      }, [hamburger]);

  return (
    <div className='sticky top-0'>
        <h2 className='flex m-3' onClick={()=> setHamburger (!hamburger)}>
            <Hamburger color="#FFFFFF"/>
        </h2>

        {hamburger ? (
             
            <nav className='flex flex-col items-start justify-start 
            ml-3.5 absolute opacity-100
             md:max-w-[55%] xl:max-w-[45%]  navBook'
             style={{ width: `${navSize}%`, transition: 'width 0.3s ease-in-out' }}
            >
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
