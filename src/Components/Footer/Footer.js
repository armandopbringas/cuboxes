import React from 'react'
import logoFooter from '../../Assets/logo-white.png'
import logoFacebook from '../../Assets/facebook-f.png'
import logoTwitter from '../../Assets/twitter.png'
import logoSlack from '../../Assets/slack-hash.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer__container'>
            <img className='footer__logo' src={logoFooter} alt=''/>
            <div className='footer__line' />
            <div className='footer__items'>
            <div className='footer__sm--container'>
                <img className='footer__logoFacebook' src={logoFacebook} alt='' />
                <img className='footer__logoTwitter' src={logoTwitter} alt='' />
                <img className='footer__logoSlack' src={logoSlack} alt='' />
            </div>
                <ul className='footer__politics--container'>
                    <li className='footer__politics--items'>Aviso de privacidad</li>
                    <li className='footer__politics--items'>Soporte</li>
                    <li className='footer__politics--items'>Términos y condiciónes</li>
                </ul>
            </div>
        </footer>
    )
}
 
export default Footer
