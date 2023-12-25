import React from 'react'
import Container from "../../elements/Container"
import BackgroundImage from "../../../medias/images/background/bg-footer.jpg"
import Logo from "../../../medias/svg/Logo-burger-house-white.svg"
import IcoInsta from "../../../medias/svg/square-instagram.svg"
import IcoFacebook from "../../../medias/svg/facebook.svg"
import IcoTwitter from "../../../medias/svg/square-twitter.svg"
import IcoWatsApp from "../../../medias/svg/square-whatsapp.svg"

export default function Footer() {
  return (
    <Container>
        <div className="relative lg:mb-20 p-5 text-white">
            <img src={BackgroundImage} alt="Un plan de travail de cuisine ou l'on conçoit un hamburger" className=" bg-black absolute top-0 left-0 w-full h-full object-cover z-0"/>
            <div className="relative  grid md:grid-cols-2 z-10">
            <div className="w-full p-5 md:mt-10 mt-10 md:mb-28">
                {/* left */}
                <img src={Logo} alt="Burger house" className="w-2/3"/>
                <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. 
               </p>
            </div>

            <div className="md:h-full w-full flex flex-col items-start md:items-center justify-center mb-10 md:mb-0 p-5 md:p-0">
                {/* Right */}
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-10 md:w-10 mr-5">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                   </svg>
                    <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">15 place bellecour, 6900 Lyon</span>
                </div>
                <div className="flex items-center m-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-10 md:w-10 mr-5">
                     <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                     <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                    <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">info@burger-house.com</span>
               </div>
            </div>
            </div>
                {/* Footer */}
                    <div className="relative z-10 flex items-center justify-between">
          <div className="uppercase font-extrabold tracking-tighter text-sm">
            © burger house 2023. All rights reserved.
          </div>
          <div className="flex">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoInsta} alt="" className="w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoFacebook} alt="" className="w-7 h-7 mr-2  bg-white group-hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoTwitter} alt="" className="w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoWatsApp} alt="" className="w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1" />
            </a>
          </div>
        </div>

        <div className="bg-red-500">
          <span className="text-xs">
            Burger House App.
          </span>
        </div>

        </div>
    </Container>
  )
}
