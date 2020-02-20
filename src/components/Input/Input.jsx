import React from 'react'
import './Input.css'

export default (props) => 
    <div className='position'>
        <span className={'label'}>{props.label}</span>
        <input disabled={props.disabled} onChange={props.onChange} value={props.value} className={props.error}></input>
    </div>