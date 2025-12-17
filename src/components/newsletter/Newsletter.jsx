import React from 'react'
import './Newsletter.css'
import { IoMdSend } from 'react-icons/io'

function Newsletter() {
  return (
    <div className='newsletter-container'>
        <h1 className='newsletter-title'>NewsLetter</h1>
        <div className='newsletter-desc'>What's Fresh and New: updates You Don't want to miss</div>
        <div className='input-container'>
            <input type="email" className='newsletter-input' placeholder='Your Email' />
            <button className='newsletter-button'>
                <IoMdSend  className='icon'/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter