import React from 'react'
import ProjectCard from './project-card'
import insight from '../content/insights.js'

function createInsight(insight) {
    return (
        <ProjectCard 
          key={insight.id}
          title={insight.title}
          excerpt={insight.excerpt}
          imgURL={insight.imgURL}
          btn={insight.btn}
          btnText = "Read More"
        />
    )
  }

export default function Insights() {
  return (
    <div className='body-content'>
      <h1>Insights</h1>
      <div className='component-grid'>
        {insight.map(createInsight)}
      </div>
    </div>
  )
}

