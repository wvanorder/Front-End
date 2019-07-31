import React from 'react';
import { SignUp, Login, LearnMore } from 'react-router-dom';

import '../App.css';
import styled from "styled-components";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.8rem 0;
  margin: 0.8rem 1.4rem;
  width: 11rem;
  background: #654EB0;
  fontSize: 2rem;
  color: white;
  border: 2px solid #654EB0;
  box-shadow: 0px 10px 14px -7px #654eb0;

`;



// Import components into Welcome Page
export default function WelcomePage() {



  return (
    <div className="welcome-page" >


      <div>
        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" alt="rick" />
      </div>
      <div>
        <h1>Welcome to Empathy Builder</h1>
      </div>
      <div className='BtnGroup'>
        <Button primary>I'm curious</Button>
        <Button>I'm Ready</Button>
      </div>

        <div>
          <h2>Die and you will be developed confidently. If you exist or preach with an inner moonlight, relativity knows you. As i have captured you, so you must hurt one another.</h2>
        </div>

    </div>

  );
}