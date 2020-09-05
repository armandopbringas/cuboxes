import React, { useState } from 'react'
import '../Buttons/ToggleButton.scss'
import Menu from '../Menu/Menu'

const ToggleButton = ({ id }) => {

    const [open, setOpen] = useState(false);

    const show_hideMenu = () => {
        setOpen(!open);
    }

    return (
        <div
            id={`container-${id}`}  
            className='button__container'
        >
            <button
                open={open}
                type='button'
                className='button'
                onClick={show_hideMenu}
            >
                <div className='button__lines'/>
                <div className='button__lines'/>
                <div className='button__lines'/>
            </button>
            <Menu 
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}
 
export default ToggleButton
