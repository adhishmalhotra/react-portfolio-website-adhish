import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Social Media Website - LinkedHub" />
          </div>
          <h3>Social Media Website - LinkedHub</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adhishmalhotra/Data_FinalProject" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Gym Booking Application" />
          </div>
          <h3>Gym Booking Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adhishmalhotra/Web-Programming-Final-Project.git" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Image Recognition tool" />
          </div>
          <h3>Image Recognition tool</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adhishmalhotra/Image-Recognition-Tool.git" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Jarvis - Personal Assistant for Linux, MacOS and windows" />
          </div>
          <h3>Jarvis - Personal Assistant for Linux, MacOS and windows</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adhishmalhotra/Jarvis_SoftwareQuality.git" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Project Shell" />
          </div>
          <h3>Project Shell</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adhishmalhotra/Project-Shell.git" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Android Pizza App" />
          </div>
          <h3>Android Pizza Order App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adhishmalhotra/Pizza-Android-app.git  " className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
        
        
      </div>
    </section>
  )
}

export default Portfolio