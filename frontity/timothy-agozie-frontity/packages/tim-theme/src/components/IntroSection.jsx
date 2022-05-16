import React from "react";
import IntroTxt from "./intro-txt";
import IntroCard from "./intro-card";
import pic from '../img/tim.jpg'


let content = `My name is Timothy Agozie and 
I'm a Full Stack Web developer / designer with
over 10 years experience. You're welcome
to my personal website where I showcase all of
my projects.
Feel free to get in touch.`;

export default function IntroSection() {
  return (
    <div className="grid-2 body-content">
        <div className="grid-item">
            <IntroCard name="Timothy Agozie" urole="Full Stack Web Developer" pic={pic} />
        </div>
        <div className="grid-item">
            <IntroTxt title="Hi there 👋🏾" content={content} />
        </div>
    </div>
  )
}
