import React, { useState } from 'react'
import './Form.scss'

const Form = ({ showhideModal }) => {

    const [ send, setSend ] = useState({
        email: '',
        name: '',
        phone: ''
      })
      const [ error, setError ] = useState(false)
      const { name, email, phone } = send;

      const handleInputChange = e => {
        setSend({
          ...send,
          [e.target.name] : e.target.value
        });
      }

      const sendData = e => {
        e.preventDefault();
        if(email.trim() === '' || name.trim() === '' || phone.trim() === '') {
          setError(true);
          return;
        }
        setError(false)

        setSend({
            email: '',
            name: '',
            phone: ''
        });

        setTimeout(() => {
            showhideModal()
        }, 1000)
      }

    return (
        <>
            <form 
                className='form'
                onSubmit={sendData}
            >
                <label className='form__email'>
                    <input 
                        name='email'
                        value={email}
                        className='form__input'
                        onChange={handleInputChange}
                    />
                    <span className='form__label'>
                        Email
                    </span>
                </label>
                <label className='form__name'>
                    <input 
                        name='name'
                        value={name}
                        className='form__input'
                        onChange={handleInputChange}
                    />
                    <span className='form__label'>
                        Nombre
                    </span>
                </label>
                <label className='form__phone'>
                    <input 
                        name='phone'
                        value={phone}
                        className='form__input'
                        onChange={handleInputChange}
                    />
                    <span className='form__label'>
                        Teléfono
                    </span>
                </label>
                {
                    error ? 
                    <span className='text__alert'>
                        Todos los campos son requeridos *
                    </span> 
                    : null
                }
                <button 
                    type='submit'
                    className='form__button'
                >
                    Enviar Solicitud
                </button>
            </form>
        </>
    )
}
 
export default Form
