import Head from 'next/head';
import { Ghost } from 'react-kawaii';
import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const ErrorStyles = styled.div`
  background-color: #232323;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 15px;
  button {
    background: #232323;
    border: none;
  }
  h2,
  h1 {
    font-family: 'Raleway', sans-serif;
  }
  h1 {
    font-size: 3rem;
    color: #40a4c8;
  }
  h2 {
    color: gainsboro;
  }
`;

const ErrorPage = () => {
  const [isHappy, setIsHappy] = useState(false);
  return (
    <ErrorStyles>
      <Head>
        <title>Oops...Something Went Wrong</title>
      </Head>
      <div className="main-content">
        <h1>Oops...Something went wrong.</h1>
        <h1>Are you sure you're in the right place?</h1>
        <h2>This is Hank. He is feeling blue that you are in the wrong place.</h2>
        <h2>However if you poke his belly you can cheer him up and he might take you back home.</h2>
        <button
          type="button"
          onClick={() => {
            setIsHappy(true);
            setTimeout(() => {
              Router.push({ pathname: '/' });
            }, 1000);
          }}
        >
          <Ghost size={200} mood={isHappy ? 'blissful' : 'sad'} color={isHappy ? 'Gainsboro' : '#40a4c8'} />
        </button>
      </div>
    </ErrorStyles>
  );
};

export default ErrorPage;
