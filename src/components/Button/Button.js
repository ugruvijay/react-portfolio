import React from 'react'
import {Button} from '@material-ui/core';

import './Button.css';

const CustomButton = ({text, icon}) => {
    return (
        <Button className='custom_button' endIcon={icon ? (<div className='icon_container'>{icon}</div>) : null}>
            <span className='custom_text'>{text}</span>
        </Button>
    )
}

export default CustomButton
