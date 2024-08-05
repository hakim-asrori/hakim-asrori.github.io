import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [done, setDone] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_zyjvhe1', 'template_y5rjn4g', e.currentTarget, 'TZUByHQUJ3UYClSN9')
      .then((result) => {
        setDone(true)
      }, (error) => {
      });
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#abf1ff94", zIndex: 3 }}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="name" style={{ zIndex: 4 }} />
          <input type="email" name="email" className="user" placeholder="email" style={{ zIndex: 4 }} />
          <textarea className="user" name="message" placeholder="message" style={{ zIndex: 4 }}></textarea>
          <button type="submit" className="button" style={{ zIndex: 4 }}>Send</button>
          <span style={{ zIndex: 4 }}>{done && "Thanks for contacting me!"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)", zIndex: 3 }}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
