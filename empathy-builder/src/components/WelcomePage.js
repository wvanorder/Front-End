import React from 'react';
import { SignUp } from 'react-router-dom';
import styled from 'styled-components';


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <div>
        <h1>Welcome to the ultimate fan site!</h1>
      </div>

      <div>
        <img className="main-img ui centered medium circular image" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" alt="rick" />
        <div>
          <button>I'm Curious</button>
          <button>I'm Ready</button>
        </div>
        <div><h2>Die and you will be developed confidently. If you exist or preach with an inner moonlight, relativity knows you. As i have captured you, so you must hurt one another.</h2></div>
      </div>

    </section>
  );
}