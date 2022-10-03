import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {GiFullFolder} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>

              <BsFillAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working </small>

            </article>

            <article className='about__card'>

              <GiFullFolder  className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects </small>

            </article>

          </div>

          <p>
            Software engineer with 4+ years of experience in the design and implementation of cutting-edge software solutions to increase corporate productivity. 
            Highly skilled in managing projects from start to finish, from concept through development and delivery, and in all facets of the software development lifecycle. 
            Always regarded as a capable and hands-on leader, adept at coordinating cross-functional teams in a hectic, deadline-driven environment to complete projects on time and within budget.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>
    </section>
  )
}

export default About