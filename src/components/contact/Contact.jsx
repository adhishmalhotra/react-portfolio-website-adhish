import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="containe contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdEmail />
            <h4>Email</h4>
            <h5>adhish.malhotra25@gmail.com</h5>
            <a href="mailto:adhish.malhotra25@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/adhish-malhotra-a599a2193/" target='_blank'>Let's Get Connected on LinkedIn</a>
          </article>

          <article className='contact__option'>
            <RiWhatsappFill />
            <h4>WhatsApp</h4>
            <h5>+1(289) 927-0116 </h5>
            <a href="https://api.whatsapp.com/send?phone+12899270116" target='_blank'>Send A Message on WhatsApp</a>
          </article>

        </div>
        {/* End of Contact options */}

        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact