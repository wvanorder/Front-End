import React from 'react';

import '../App.css';
import styled from "styled-components";

const Container = styled.div`
    padding: 3rem;
    background: #F9BBB1;
`;

export default function Footer() {

  return (
    <Container>
      <div>Copyright and cool stuff go here</div>
      <div>Disclaimer text here</div>
    </Container>
  );
}