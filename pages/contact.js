import React, { useContext } from 'react';

import ContactLink from '../components/ContactLink';
import ContactPageStyles from '../components/styles/ContactPageStyles';
import Form from '../components/Form';
import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Contact</title>
      </Head>
      <ContactPageStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='contact-title'>
            <h1>Contact Info</h1>
            <p>Find me at the following places:</p>
          </div>
          <div className='social-icons'>
            <ContactLink
              link='https://www.github.com/theranbrig'
              icon='fab fa-github'
              name='theranbrig'
            />
            <ContactLink
              link='https://www.twitter.com/wellBuilt'
              icon='fab fa-twitter'
              name='wellBuilt'
            />
            <ContactLink
              link='https://medium.com/@theran.brigowatz'
              icon='fab fa-medium-m'
              name='Theran Brigowatz'
            />
            <ContactLink
              link='https://www.linkedin.com/in/theran-brigowatz-a861b3133/'
              icon='fab fa-linkedin-in'
              name='Theran Brigowatz'
            />
            <ContactLink
              link='mailTo:theran.brigowatz@gmail.com'
              icon='far fa-envelope-open'
              name='theran.brigowatz@gmail.com'
            />
          </div>
          <div className='bottom-writing'>
            <p>
              I am available to discuss freelance, contract, and full-time work opportunities. Check
              out my{' '}
              <a
                href='https://docs.google.com/document/d/1GOzEZ8lB-KF4j3GQCFPhZ7pdRygX6wl7fHr_pbYKQTw/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'>
                resume.
              </a>{' '}
              Please get in touch with me, or check out my{' '}
              <a
                href='https://medium.com/@theran.brigowatz'
                target='_blank'
                rel='noopener noreferrer'>
                blog
              </a>
              , with any questions, comments, or biting criticism that you may have.
            </p>
          </div>
          <div className='form-area'>
            <Form />
          </div>
        </motion.div>
      </ContactPageStyles>
    </Layout>
  );
};

export default Contact;
