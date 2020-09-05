import React, { useState } from 'react'
import './Header.scss'
import ToggleButton from '../Buttons/ToggleButton.js'
import Modal from '../Modal/Modal'
import logo from '../../Assets/logo@3x.png'

const Header = () => {

    const [open, setOpen] = useState(false)

    const showhideModal = () => {
        setOpen(!open)
    }

    return (
        <>
            <header className='header'>
                <picture className='header__logo--container'>
                    <img 
                        src={logo}
                        alt='brand logo'
                        className='header__logo'
                    />
                </picture>
                <div className='header__nav--container'>
                    <nav className='header__nav'>
                        <ul className='header__nav--menu'>
                            <li className='header__nav--item'>Características</li>
                            <li className='header__nav--item'>Precio</li>
                            <li className='header__nav--item'>Soporte</li>
                        </ul>
                    </nav>
                    <button 
                        type='button'
                        onClick={showhideModal}
                        className='header__nav--button'
                    >
                        Quiero ser Cuboxer
                    </button>
                </div>
                <ToggleButton />
                <div className={`modal modal__showing-${open}`}>
                    <Modal 
                        showhideModal={showhideModal}
                    />
                </div>
            </header>
        </>
    )
}
 
export default Header
