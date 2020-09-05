import React from 'react'
import './Menu.scss'

const Menu = ({ open }) => {

    return (
        <nav 
            id='menu__nav'
            className={ open ? '' : 'show' }
        >
            <ul className='menu__nav--list'>
                <li className='menu__nav--item'>
                    <a 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='menu__nav--link'
                        href='https://cv-portfolio.netlify.app/'
                    >
                        Características
                    </a>
                </li>
                <li className='menu__nav--item'>
                    <a
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='menu__nav--link'
                        href='https://cv-portfolio.netlify.app/'
                    >
                        Precio
                    </a>
                </li>
                <li className='menu__nav--item'>
                    <a
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='menu__nav--link'
                        href='https://cv-portfolio.netlify.app/'
                    >
                        Soporte
                    </a>
                </li>
            </ul>  
        </nav>
    )
}
 
export default Menu
