import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitles/HeadingTitles'
import Heading from '../../elements/DisplayTitles/Heading'
import Button from '../../elements/Buttom'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'

export default function Products() {
  return (
    <Container>
        <HeadingTitles>
            Toujour des délicieux burgers
        </HeadingTitles>
        <Heading  theme="secondary" alignement="center" className="my-5 text-center">
            Choisissez et savourez
        </Heading>
        <p className='text-center'>
        On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
        </p>
        <div className='grid lg:grid-cols-3 gap-x-1 mb-20 mt-10 '>
          <div className='w-full h-full  '>
            <div className='relative w-full h-72'>
            <img src={Product1} alt='Un hamburger' className='bg-primary obsolute top-0 left-0 w-full h-full object-cover z-0'/>
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3">
              lorem upsum dolor
            </Heading>
            <p className='text-center'>
            Le Lorem Ipsum est simplement du faux texte employé 
            </p>
            <Button color='danger' className='font-secondary mb-10 lg:mb-0'>
              commandez
            </Button>
          </div>
          </div>
          <div className='w-full h-full  '>
            <div className='relative w-full h-72'>
              <img src={Product2} alt='Un hamburger' className='bg-primary obsolute top-0 left-0 w-full h-full object-cover z-0'/>
            </div>
          <div className='flex flex-col items-center justify-center px-5 pb-5'>
             <Heading variant="h3">
                lorem upsum dolor
            </Heading>
         <p className='text-center'>
              Le Lorem Ipsum est simplement du faux texte employé 
        </p>
           <Button color='danger' className='font-secondary'>
               commandez
           </Button>
        </div>
        </div>
        <div className='w-full h-full  '>
        <div className='relative w-full h-72'>
          <img src={Product3} alt='Un hamburger' className='bg-primary obsolute top-0 left-0 w-full h-full object-cover z-0'/>
        </div>
        <div className='flex flex-col items-center justify-center px-5 pb-5'>
          <Heading variant="h3">
            lorem upsum dolor
         </Heading>
         <p className='text-center'>
             Le Lorem Ipsum est simplement du faux texte employé 
        </p>
          <Button color='danger' className='font-secondary lg:mb-0'>
           commandez
          </Button>
        </div>
        </div>
        </div>
    </Container>
  )
}
