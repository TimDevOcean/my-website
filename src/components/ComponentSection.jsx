import React from 'react'
import ProjectCard from './project-card'
import portfolioCat from '../content/portfolio.js'


function createPortfolioCat(portfolioCat) {
  return (
    <div className='grid-item'>
      <ProjectCard 
        key = {portfolioCat.id}
        title={portfolioCat.title}
        excerpt={portfolioCat.excerpt}
        imgURL={portfolioCat.imgURL}
        btn={portfolioCat.btn}
      />
    </div>
  )
}


export default function ComponentSection() {
  return (
    <div className='body-content'>
      <h1>Portfolio</h1>
      <div className='component-grid'>
        {portfolioCat.map(createPortfolioCat)}
      </div>
    </div>
  )
}
