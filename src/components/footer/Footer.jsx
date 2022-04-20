import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
      <footer>
        <a href="#" className=''>Emmanuel Onugha</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://twitter.com/itz_azu"><BsTwitter/></a>
          <a href="https://instagram.com/azunna_"> <BsInstagram/></a>
          <a href="https://www.linkedin.com/in/emmanuel-onugha-b24b3418b/"><BsLinkedin/></a>
        </div>

        <div className="footer__copyrights">
          <small> &copy; Emmanuel Onugha. All rights reserved</small>
        </div>
      </footer>
  )
}

export default Footer