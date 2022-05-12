import React from 'react'
import IntroSection from './IntroSection'
import Form from './form'

export default function Contact() {
  return (
    <div className="body-content">
        <IntroSection />
        <h1>Contact</h1>
        <div className='form-container'>
            <Form />
        </div>
    </div>
  )
}
