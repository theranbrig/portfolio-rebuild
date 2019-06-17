import React, { useContext } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Form from '../components/Form';
import ContactLink from '../components/ContactLink';
import ContactPageStyles from '../components/styles/ContactPageStyles';
import { DarkContext } from '../components/context/DarkContext';

const Contact = () => {
  const { darkMode } = useContext(DarkContext);
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Contact</title>
      </Head>
      <ContactPageStyles>
        <div className="contact-title">
          <img
            src={
              darkMode
                ? 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_320/v1551529192/theran-logo.png'
                : 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_320/v1551529192/theran-logo-Original-dark.png'
            }
            alt="Theran Brigowatz Logo"
          />
          <h1>CONTACT THERAN</h1>
          <p>Get a hold of me for any questions you may have.</p>
        </div>
        <div className="social-icons">
          <ContactLink link="https://www.github.com/theranbrig" icon="fab fa-github" name="theranbrig" />
          <ContactLink link="https://www.twitter.com/wellBuilt" icon="fab fa-twitter" name="wellBuilt" />
          <ContactLink link="https://medium.com/@theran.brigowatz" icon="fab fa-medium-m" name="Theran Brigowatz" />
          <ContactLink
            link="https://www.linkedin.com/in/theran-brigowatz-a861b3133/"
            icon="fab fa-linkedin-in"
            name="Theran Brigowatz"
          />
          <ContactLink
            link="mailTo:theran.brigowatz@gmail.com"
            icon="far fa-envelope-open"
            name="theran.brigowatz@gmail.com"
          />
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
};

export default Contact;
