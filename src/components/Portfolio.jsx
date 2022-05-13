import React from 'react'
import ProjectCard from './project-card'
import portfolioCat from '../content/portfolio.js'


export default function Portfolio() {

  function createPortfolioCat(portfolioCat) {
    return (
        <ProjectCard 
          key={portfolioCat.id}
          title = {portfolioCat.title}
          excerpt = {portfolioCat.excerpt}
          imgURL = {portfolioCat.imgURL}
          btn = {portfolioCat.btn}
          btnText = "Discover More"
        />
    )
  }

  return (
    <div className='body-content'>
      <h1>Portfolio</h1>
      <div className='component-grid'>
        {portfolioCat.map(createPortfolioCat)}
      </div>
    </div>
  )
}
