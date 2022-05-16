import React from 'react'
import IntroSection from './IntroSection'
import Form from './form'

export default function Contact() {
  return (
    <div className="body-content">
        <IntroSection />
        <h1>Contact</h1>
        <p style={{fontSize: "14px", lineHeight: "1px"}} >contact@timothyagozie.com | +233 554 834 613</p>
        <div className='form-container'>
            <Form />
        </div>
    </div>
  )
}
