import React from 'react'
import PostCard from './post-card'
import website from '../content/websites.js'

function createWebsite(website) {
    return (
        <PostCard 
          key={website.id}
          title={website.title}
          excerpt={website.excerpt}
          imgURL={website.imgURL}
          btn={website.btn}
          btnText = "Visit Site"
          target = {"_blank"}
        />
    )
  }

export default function Websites() {
  return (
    <div className='body-content'>
      <h1>Websites</h1>
      <div className='component-grid'>
        {website.map(createWebsite)}
      </div>
    </div>
  )
}
