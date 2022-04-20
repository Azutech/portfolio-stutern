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
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>clients</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10 +</small>
            </article>
          </div>
       
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem corrupti cum cumque maiores hic? 
            Tempore quasi eligendi voluptate molestias vero cum et quo consequatur praesentium quos! Dolore impedit 
            temporibus magnam? Culpa eum ab repudiandae aut laboriosam, facere assumenda perspiciatis incidunt maiores 
            officiis aperiam, ducimus repellat?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About