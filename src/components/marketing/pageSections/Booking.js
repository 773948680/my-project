import React from 'react'
import Heading from "../../elements/DisplayTitles/Heading"
import Container from '../../elements/Container'
import Assiette from "../../../medias/images/background/Assiette-burger-frites.png"
import Burger from "../../../medias/images/background/Burger.png"
import Sauce from "../../../medias/images/background/Sauce-pimente.png"

export default function Booking() {
  return (
    <Container>
        <div className="relative mb-20 ">
            <img src={Burger}  alt="Une sauce pimentée" className="hidden lg:block absolute -top-20 -left-36 z-10"/>
            <img src={Sauce}  alt="Une assiette hamburger frites" className="hidden lg:block absolute bottom-0 left-0"/>
            <img src={Assiette}  alt="Un hamburger" className="hidden lg:block absolute -bottom-52 -right-96"/>
            <div className="max-w-3xl mx-auto sm:px-10 md:py-20">
            <Heading variant="h3" alignement="center">
                Réservation
            </Heading>
            <Heading alignement="center" theme="secondary" className="mt-5 text-center">
                Réservez votre table
            </Heading>
            <form className="grid sm:grid-cols-2 gap-x-7 gap-y-6 mt-20">
                <div className="">
                    <label htmlFor="name">
                        NOM
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Lamine CISS"
                    className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5" 
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                   </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                    placeholder="lamine.ciss@gmail.com"
                  />
               </div>

               <div>
                 <label htmlFor="date">
                    Date
                 </label>
                 <input 
                 type="date"
                 name="date"
                 id="date"
                 autoComplete="off"
                 className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                />
              </div>

              <div>
                 <label htmlFor="time">
                     Heure
                </label>
                <input 
                type="time"
                name="time"
                id="time"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                 />
            </div>

            <div>
              <label htmlFor="customer">
                Nombre de personnes
              </label>
              <input 
                type="number"
                name="customer"
                id="customer"
                autoComplete="off"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="5"
              />
            </div>

            <div>
              <label htmlFor="sendBooking" className="invisible">
              Trouver une table
              </label>
              <input 
                type="button"
                name="sendBooking"
                id="sendBooking"
                className="bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 cursor-pointer rounded-md animate"
                value="Trouver une table"
              />
            </div>

            </form>
            </div>
        </div>
    </Container>
  )
}
