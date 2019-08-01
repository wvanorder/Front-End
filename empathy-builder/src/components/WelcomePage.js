import React from 'react';
import { SignUp, Login, LearnMore, Link } from 'react-router-dom';
import Footer from './Footer';

import '../App.css';
import styled from "styled-components";
import Calculator from "./Calculator";

/*
const Button = styled.a`
  /!* This renders the buttons above... Edit me! *!/
  display: inline-block;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  margin: 0.8rem 1.4rem;
  width: auto;
  background: #654EB0;        
    &:hover{
            background-color: DarkOrchid;
            transition-duration: 0.2s; }
  font-size: 1.6rem;  
  border: 2px solid #654EB0;
      &:hover{
            border-color: none;
            transition-duration: 0.2s; }
  box-shadow: 0px 10px 14px -7px #654eb0;
  color: white;
`;
*/

const Welcome = styled.div`
    padding: 5rem;
    background-color: white;
`;

const PageContainer = styled.div `
    padding-bottom: 0;
    margin-bottom: auto;
`;

const Image = styled.img`
background-color: white;
`;

const H1 = styled.h1`
    font-size: 3rem;
    padding: 3rem;
`;

const H3 =styled.h3`
    font-size: 2rem;
`;

const Header = styled.div`
    padding: 2rem auto 1rem;
`;

// Import components into Welcome Page
export default function WelcomePage() {

  return (
    <PageContainer>
      <Welcome>
          <div>
           <Image src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg"
              alt="rick"/>
          </div>
        <div>
          <Header><H1>Welcome to Empathy Builder</H1></Header>
        </div>
        <div>
          <H3>Definition, thought and rise. Everything we do is connected with suffering: booda-hood, surrender,
          ascension, joy.
          </H3>
        </div>
        <div className='BtnGroup'>
          <button><Link to={"Calculator"} className="link">Anonymous Mode</Link></button>
          <button><Link to={"SignUp"} className="link">Account SignUp</Link></button>
        </div>

        <div>
          <p>Die and you will be developed confidently. If you exist or preach with an inner moonlight, relativity knows
            you. As i have captured you, so you must hurt one another.</p>
        </div>

    </Welcome>
      <Footer/>
    </PageContainer>

  );
}