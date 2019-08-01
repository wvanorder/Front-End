import React from 'react';
import Footer from "./Footer";

/*phantom div to allocate layout space for the navbar*/
const phantom = {
  display: 'block',
  padding: '3rem',
  height: '60px',
  width: '100%',
};

export default function LearnMore() {

  return (
    <div>
      <div style={phantom} />
     <h2>Resources</h2>
      <Footer/>
    </div>
  )

}