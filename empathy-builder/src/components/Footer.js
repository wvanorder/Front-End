import React from 'react';

import '../App.css';
import styled from "styled-components";


const Container = styled.div`
    padding: 1.4rem 3rem;
    background: #F9BBB1;
`;

export default function Footer() {

  return (
    <Container>
      Copyright and cool stuff go here
    </Container>
  );
}