import React from 'react'
import clock from '../../Assets/icon-time.png'
import billing from '../../Assets/icon-billing.png'
import shipping from '../../Assets/icon-shipping.png'
import ButtonOne from '../Buttons/ButtonOne' 
import './Cards.scss'

const Cards = () => {
    return (
        <>
            <div className='cards__container'>
                <div className='cards__item'>
                    <picture>
                        <img src={clock} alt='icono de reloj' />
                    </picture>
                    <p className='cards__text'>
                        <strong>Ahorra Tiempo</strong> al gestionar todas tus suscripciones en un solo lugar. Deja que el menu simplificado de Cuboxes haga el trabajo duro por ti.
                    </p>
                </div>
                <div className='cards__item'>
                    <picture>
                        <img src={billing} alt='icono de factura' />
                    </picture>
                    <p className='cards__text'>
                        <strong>Un solo cargo</strong> al pagar en Cuboxes todas tus suscripciones se aplican en un solo cargo, no mas suscribciones duplicadas ni olvidadas.
                    </p>
                </div>
                <div className='cards__item'>
                <picture>
                        <img src={shipping} alt='icono de un envío' />
                    </picture>
                    <p className='cards__text'>
                        <strong>Paga un</strong> solo envío al hacer tus suscripciones con Cuboxes, puedes hacer que todas te lleguen al mismo tiempo, evitando pagar envíos adicionales.
                    </p>
                </div>
            </div>
            <ButtonOne />
        </>
    )
}
 
export default Cards 
