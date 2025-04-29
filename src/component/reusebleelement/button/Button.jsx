import React from 'react'
import './button.css'
export default function Button({text,type,onclickhandler,color}) {

    return (
        <button type={type} onClick={onclickhandler} className='buttone' style={{backgroundColor: color}}>{text}</button>
    )
 
}