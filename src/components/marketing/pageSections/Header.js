import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Pictogramme from '../../../medias/svg/picto-burger-house.svg'
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Buttom from '../../elements/Buttom'


export default function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="w-full">
       <img src={Logo} alt="Burger House App" className="w-64 hidden md:block" />
       <img src={Pictogramme} alt="Burger House App" className="w-10 md:hidden" />
       </div>
      <div className="w-full text-secondary">
           <div  className="items-center justify-end hidden md:flex">
            <img src={Icone} alt="" className="w-5 h-5 mr-1" />
            <span>Commandez votre repas en ligne</span>
           </div>
           <div  className="md:mt-5 flex items-center justify-end">
                <Buttom className="tracking-widest mr-3  rounded-md">
                Inscription
                </Buttom>
                <Buttom className="tracking-widest  rounded-md" color="secondary">
                Connexion
                </Buttom>

           </div>
      </div>
    </div>
  )
}
