import React, {useRef, useState} from 'react'
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
          <div className="blur s-blur1" style={{ background:"#abf1ff94" }}></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="name" />
          <input type="email" name="email" className="user" placeholder="email" />
          <textarea className="user" name="message" placeholder="message"></textarea>
          <button type="submit" className="button">Send</button>
          <span>{done && "Thanks for contacting me!"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
