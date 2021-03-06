import React from 'react'
import './about.css'
import ME from '../../assets/IMG_8483.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"> 
         <div className="about__me-image">
           <img src={ME} alt=" About Image" />
         </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10 +</small>
            </article>
          </div>
       
          <p>
          Brilliant Software Engineer Intern, help teams develop ideas and implement code on various products; 
          while gaining valuable experience with the latest technologies and tools. 
          Applies knowledge and skills acquired from coursework to work on software, back-end systems architecture and more. 
          Hones problem-solving skills to keep projects moving forward.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About