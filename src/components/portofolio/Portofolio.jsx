import React from 'react'
import './portofolio.css'
import PortoImg1 from '../../assets/porto1.png'
import PortoImg2 from '../../assets/porto2.png'
import PortoImg3 from '../../assets/porto3.png'
import PortoImg4 from '../../assets/porto4.jpg'
import PortoImg5 from '../../assets/porto5.jpg'

const portofolio = [
  {
    id:1,
    image:PortoImg1,
    title:'Application Demo 1',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id:2,
    image:PortoImg2,
    title:'Application Demo 2',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id:3,
    image:PortoImg3,
    title:'Application Demo 3',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id:4,
    image:PortoImg4,
    title:'Application Demo 4',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id:5,
    image:PortoImg5,
    title:'Application Demo 5',
    github: 'https://github.com',
    demo: 'https://google.com'
  }
]


const Portofolio = () => {
  return (
    <section id='portofolio'>
    <h5><br></br>My Recent Code</h5>
    <h2>Portofolio</h2>

    <div className="container porto__container">
      {
        portofolio.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='porto_item'>
              <div className="porto_item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="porto_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
    </div> 
    
    <div className="empty_space">
      <br></br>
      <br></br>  
    </div> 
    </section>
  )
}

export default Portofolio