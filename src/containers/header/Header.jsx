import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p>Sign up today to experience the wonders of machine learning AI technology. You have only a few more years to get in on this before the technology surpasses human intelligence and begins to take over the world.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div> 
      </div>
    </div>
  )
}

export default Header
