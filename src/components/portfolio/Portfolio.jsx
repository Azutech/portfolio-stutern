import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio/Capture.PNG'
import IMG2 from '../../assets/Portfolio/Screenshot (18).png'


const data = [
  {
    id: 1 ,
    image: IMG1,
    title:"These are the demo projects",
    github: "https://github.com",
    demo: ""
  },

  {
    id: 2 ,
    image: IMG1,
    title:"These are the demo projects",
    github: "https://github.com",
    demo: ""
  },

  {
    id: 3 ,
    image: IMG2,
    title:"These are the demo projects",
    github: "https://github.com",
    demo: ""
  },

  {
    id: 4 ,
    image: IMG2,
    title:"These are the demo projects",
    github: "https://github.com",
    demo: ""
  },

  
]

 
const Portfolio = () => {
  return (
<section id="portfolio">
  <h5> My Recent Work</h5>
  <h2> Portfolio </h2>

  <div className="container portfolio__container">
  
    {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key ={id} className="portfolio__item">
          <div className="portfolio__item-img">
            <img src = {image} alt = {title}/>
            <h3>These is a Portfolio Projects</h3>
            <div className="portfolio__item-cta"> 
              <a href= {github} className='btn' target={github}>Github</a>
              <a href= {demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
   
          </div>
       </article>
       
      
       
       
        )
      })
    }
    
  </div>
</section>  )
}

export default Portfolio