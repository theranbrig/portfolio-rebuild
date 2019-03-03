import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Form from '../components/Form';

const ContactPageStyles = styled.div`

`;

const Contact = () => (
  <Layout>

    <ContactPageStyles>
      <Image className="logo" src="https://res.cloudinary.com/dq7uyauun/image/upload/v1551529192/theran-logo.png" size="small" />
      <h1>Contact Theran</h1>
      <p>Get a hold of me for any questions you may have.</p>
      <div className="social-icons">
        <ul>
          <li>
            <a href="https://www.github.com/theranbrig" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
              <h5>theranbrig</h5>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/wellBuilt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
              <h5>wellBuilt</h5>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/brigowatz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
              <h5>Theran Brigowatz</h5>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/theran-brigowatz-a861b3133/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
              <h5>Theran Brigowatz</h5>
            </a>
          </li>
          <li>
            <a href="mailTo:theran.brigowatz@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope-open" />
              <h5>theran.brigowatz@gmail.com</h5>
            </a>
          </li>
        </ul>
      </div>
      <p>
					I am available to discuss freelance, contract, and full-time work opportunities. Check out
					my
        {' '}
        <a
          href="https://docs.google.com/document/d/1GOzEZ8lB-KF4j3GQCFPhZ7pdRygX6wl7fHr_pbYKQTw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
						resume.

        </a>
        {' '}
					Please get in touch with me, or check out my
        {' '}
        <a href="https://medium.com/@theran.brigowatz" target="_blank" rel="noopener noreferrer">
						blog

        </a>
					, with any questions, comments, or biting criticism that you may have.

      </p>
      <Form />
    </ContactPageStyles>
  </Layout>
);


export default Contact;
