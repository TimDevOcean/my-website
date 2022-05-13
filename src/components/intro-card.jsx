import React from 'react';
import slogos from '../img/stack-logos-color.png';
import SocialIcons from './social-icons';
import 'animate.css';

export default function IntroCard(props) {
  return (
    <div className='card card-grid-2 animate__fadeInUp'>
      <div className='card-item'>
        <img className='card-pic' src={props.pic} alt=''/>
      </div>

      <div className='card-item'>
        <h3>{props.name}</h3>
        <p>{props.urole}</p>
        <img className='stack-logos' src={slogos} alt='' />
        <hr></hr>
        <SocialIcons 
          ll="https://www.linkedin.com/in/timothyagozie/"
          gl="https://github.com/TimDevOcean"
          il="https://www.instagram.com/timozzzi/"
          tl="https://twitter.com/timozzzi" 
          el="mailto:timothybillyagozie@gmail.com"
          wl="https://wa.me/233554834613"
        />
      </div>
    </div>
  )
}
