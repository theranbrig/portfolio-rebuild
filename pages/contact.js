import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Form from '../components/Form';

const ContactPageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 2fr 1fr 4fr;
  padding: 30px;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.black};
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 3fr 1fr 2fr;
  }
  .contact-title {
    img {
      width: 20%;
    }
    h1,
    p {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  .social-icons {
    ul {
      list-style-type: none;
      justify-items: center;
      align-items: center;
      text-align: center;
      padding: 0;
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr;
      @media (max-width: 900px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(5, 1fr);
      }
      li {
        width: 100%;
        h5 {
          color: ${props => props.theme.white};
          font-family: ${props => props.theme.raleFont};
        }
        i {
          font-size: 5rem;
          color: ${props => props.theme.blue};
        }
      }
    }
  }
  .bottom-writing {
    p {
      color: ${props => props.theme.white};
      font-size: 1.5rem;
      font-family: ${props => props.theme.raleFont};
      width: 80%;
      margin-left: 10%;
      @media (max-width: 900px) {
        width: 100%;
        margin: 0;
      }
      a {
        color: ${props => props.theme.blue};
      }
    }
  }
  .form-area {
    width: 60%;
    margin: 20px 20%;
    font-family: ${props => props.theme.raleFont};
    h2 {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
    }
    button {
      color: ${props => props.theme.blue} !important;
      margin: 10px;
    }
    textarea {
      height: 200px;
    }
    textarea,
    input {
      background-color: ${props => props.theme.white} !important;
    }
    @media (max-width: 900px) {
      width: 90%;
      margin: 0;
      margin-left: 5%;
    }
  }
`;

const Contact = () => (
  <Layout>
    <ContactPageStyles>
      <div className="contact-title">
        <img
          className="logo"
          src="https://res.cloudinary.com/dq7uyauun/image/upload/v1551529192/theran-logo.png"
          alt="Theran Brigowatz Logo"
        />
        <h1>Contact Theran</h1>
        <p>Get a hold of me for any questions you may have.</p>
      </div>
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
            <a href="https://medium.com/@theran.brigowatz" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium-m" />
              <h5>Theran Brigowatz</h5>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theran-brigowatz-a861b3133/" target="_blank" rel="noopener noreferrer">
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
      <div className="bottom-writing">
        <p>
          I am available to discuss freelance, contract, and full-time work opportunities. Check out my{' '}
          <a
            href="https://docs.google.com/document/d/1GOzEZ8lB-KF4j3GQCFPhZ7pdRygX6wl7fHr_pbYKQTw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume.
          </a>{' '}
          Please get in touch with me, or check out my{' '}
          <a href="https://medium.com/@theran.brigowatz" target="_blank" rel="noopener noreferrer">
            blog
          </a>
          , with any questions, comments, or biting criticism that you may have.
        </p>
      </div>
      <div className="form-area">
        <Form />
      </div>
    </ContactPageStyles>
  </Layout>
);

export default Contact;
