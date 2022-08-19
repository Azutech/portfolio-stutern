import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/Portfolio/smart_contract.jpg'
import IMG3 from '../../assets/Portfolio/Capture-stutern.JPG'
import IMG4 from '../../assets/Portfolio/Capture--prolego.JPG'
import IMG5 from '../../assets/Portfolio/coffee-laptop.jfif'


const data = [
  {
    id: 1 ,
    image: IMG4,
    title:"Prolego",
    github: "https://github.com/salimkarbm/Prolego",
    demo: "https://prolego.vercel.app/"
  },

  {
    id: 2 ,
    image: IMG5,
    title:"Coffee StoreFront API ",
    github: "https://github.com/Azutech/StoreFront-Backend-API",
    demo: "https://github.com/Azutech/StoreFront-Backend-API"
  },

  {
    id: 3 ,
    image: IMG3,
    title:"Stutern Clone Website",
    github: "https://github.com/Azutech/Stutern-clone-biweekly-challenge",
    demo: "https://Azutech.github.io/Stutern-clone-biweekly-challenge"
  },

  {
    id: 4 ,
    image: IMG2,
    title:"Smart Contract",
    github: "https://github.com/Azutech/Coffee-Defi-app",
    demo: "https://github.com/Azutech/Coffee-Defi-app"
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
            <h3>These are the Portfolio Projects</h3>
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