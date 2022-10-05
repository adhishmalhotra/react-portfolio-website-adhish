import React from 'react'
import './services.css'
import IMG1 from '../../assets/services1.jpg'
import IMG2 from '../../assets/services2.jpg'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Recent Jobs</h5>
      <h2>Professional Experience</h2>

      <div className='container services__container'>
        <article className='service__item'>
        <div className='service__item-image'>
          <img src={IMG2} alt="Omers" />
        </div>
        <h3>Backend Developer</h3>
        <div className='service__item-cta'>
          <p>

          </p>
        </div>
        </article>

        <article className='service__item'>
        <div className='service__item-image'>
          <img src={IMG1} alt="Ontario Tech University" />
        </div>
        <h3>Technical Services Assistant</h3>
        <div className='service__item-cta'>
          <p>
            
          </p>
        </div>
        </article>

        <article className='service__item'>
        <div className='service__item-image'>
          <img src={IMG1} alt="Ontario Tech University" />
        </div>
        <h3>Lab Assistant</h3>
        <div className='service__item-cta'>
          <p>
            
          </p>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Services