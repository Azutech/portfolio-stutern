import React from 'react'
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experirence__details">
              <BsPatchCheck className='experience__details-icons'/>
               <div className="">
                 <h4>HTML</h4>
                 <small className="text-light"> Experienced</small>
                </div>
            </article>
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div>
               <h4>CSS</h4>
               <small className="text-light">Beginner</small>
               </div>
            </article>
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div>
               <h4>JavaScript</h4>
               <small className="text-light">Intermidiate</small>
               </div>
            </article>
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div>
               <h4>React</h4>
               <small className="text-light">Beginner</small>
               </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div>
               <h4>Node Js</h4>
               <small className="text-light">Intermidiate</small>
               </div>
            </article>
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div>
               <h4>Postgres SQL</h4>
               <small className="text-light">Intermidiate</small>
               </div>
            </article>
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div>
               <h4>TypeScript</h4>
               <small className="text-light">Intermidiate</small>
               </div>
            </article>
            <article className="experirence__details">
            <BsPatchCheck className='experience__details-icons'/>
               <div> 
               <h4>Mongo DB</h4>
               <small className="text-light">Intermidiate</small>
               </div>
            </article>
          </div>
        </div>
      </div>


    </section>
    
    )
}

export default experience