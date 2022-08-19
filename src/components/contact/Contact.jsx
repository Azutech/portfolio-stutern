import React from "react";
import "./contact.css";
import { HiMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import emailjs from '@emailjs/browser';


const contact = () => {

  

   return (
      <section id="contact">
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>

         <div className="container contact__container">
            <div className="contact__options">
               <article className="contact__option">
                  <HiMail className="contact__option-icon"/>
                  <h4>Email</h4>
                  <h5>azunna.onugha@gmail.com</h5>
                  <a href="mailto:azunna.onugha@gmail.com" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                  <FiTwitter className="contact__option-icon"/>
                  <h4>Twitter</h4>
                  <h5>@itz_azu</h5>
                  <a href="https://twitter.com/itz_azu" target= "_blank">Send a message</a>
               </article>
               <article className="contact__option">
                  <FaWhatsapp className="contact__option-icon"/>
                  <h4>WhatsApp</h4>
                  <h5>+2348096555734</h5>
                  <a href="https://api.whatsapp.com/send?phone+2348096555734" target= "_blank">
                     Send a message
                  </a>
               </article>
            </div>

            <form action="">
              <input type = "text" name = "name" placeholder="Your Full Name" required/>
              <input type = "email" name = "email" placeholder="Your Email" required/>
              <textarea name="message" rows="10" placeholder= "Your Message "> </textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
         </div>
      </section>
   );
};

export default contact;
