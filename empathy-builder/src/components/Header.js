import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login'

import '../App.css';
import styled from "styled-components";


/*phantom div to allocate layout space for the navbar*/
const phantom = {
  display: 'block',
  padding: '3rem',
  height: '60px',
  width: '100%',
};


const PageContainer = styled.div `

`;


// Import components into Welcome Page
export default function Header() {

  return (
    <PageContainer>
          <Login />
    </PageContainer>

  );
}