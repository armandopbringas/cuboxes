import React from 'react'
import closeButton from '../../Assets/times.png'
import './Modal.scss'
import Form from '../Form/Form'

const Modal = ({ showhideModal }) => {

    return (
        <>
            <div className='modal__container'>
                <button
                    type='button'
                    onClick={showhideModal}
                    className='modal__button--container'
                >
                    <img 
                        src={closeButton}
                        className='modal__buttonclose'
                        alt='botton de cerrar'
                    />
                </button>
                <legend className='modal__title'>
                    Quiero ser cuboxer
                </legend>
                <p className='modal__text'>
                    Llena el siguiente formulario y en breve un agente se pondrá en contacto.
                </p>
                <Form 
                    showhideModal={showhideModal}
                />
            </div>
        </>
    )
}
 
export default Modal
