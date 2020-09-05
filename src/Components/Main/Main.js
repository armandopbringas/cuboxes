import React from 'react'
import mainImage from '../../Assets/image_2.png'
import './Main.scss'
import WhiteButton from '../Buttons/WhiteButton'

const Main = () => {
    return (
        <div className='main__container'>
            <div className='main__text'>
                <h2 className='main__text--title'>
                    Todas tus Suscripciones en una sola Caja
                </h2>
                <p className='main__text--description'>
                    Administra todas tus suscripciones desde
                    un solo lugar y paga solo un envío por todas.
                </p>
                <WhiteButton />
            </div>
            <picture className='img__container'>
                <img 
                    src={mainImage} 
                    alt='imagen principal' 
                    className='img__main'
                />
            </picture>
        </div>
    )
}
 
export default Main
