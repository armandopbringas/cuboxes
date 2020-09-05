import React from 'react'
import sectionImg from '../../Assets/image.png'
import './Section.scss'
import WhiteButton from '../Buttons/WhiteButton'

const Section = () => {
    return ( 
        <div className='section__container'>
            <picture className='section__img--container'>
                <img 
                    src={sectionImg} 
                    className='section__img'
                    alt='imagen de la segunda sección de la landing' 
                />
            </picture>
            <div className='section__text--container'>
                <h1 className='section__text--title'>
                    Invierte tu tiempo
                    en cosas más importantes    
                </h1>
                <p className='secton__text--text'>
                    Cuboxes agiliza la administración de tus recurrencias, haciendote una sola factura y un solo envío para que no tengas que preocuparte por nada mas.
                </p>
                <WhiteButton />
            </div>
        </div>
    )
}
 
export default Section
