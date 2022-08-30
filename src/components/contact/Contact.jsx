import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0udhyjm', 'template_5cy045e', form.current, 'TZ9STflKGqV_6hVtf')
    
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5><br></br><br></br><br></br>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>thanos.aleks@gmail.com</h5>
            <a href="mailto:thanos.aleks@gmail.com" target='_blank'>Send a Messege</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Yosua Aleksander Thanos</h5>
            <a href="http://m.me/YosuaAleksander" target='_blank'>Send a Messege</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>(+62)-85973979187</h5>
            <a href="http://api.whatsapp.com/send?phone=6285973979187" target='_blank'>Send a Messege</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact