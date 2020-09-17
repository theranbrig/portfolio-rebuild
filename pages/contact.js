import ContactLink from '../components/ContactLink';
import ContactPageStyles from '../components/styles/ContactPageStyles';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Layout>
      <NextSeo
        title='Theran Brigowatz | Home'
        description='Get in touch with me about work opportunities'
      />
      <ContactPageStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='contact-title'>
            <h1>Contact Info</h1>
            <p>Find me at the following</p>
          </div>
          <div className='social-icons'>
            <ContactLink link='https://www.github.com/theranbrig' icon='github-blue' />
            <ContactLink link='https://www.twitter.com/wellBuilt' icon='twitter' />
            <ContactLink link='https://dev.to/theranbrig' icon='dev' />
            <ContactLink
              link='https://www.linkedin.com/in/theran-brigowatz-a861b3133/'
              icon='linkedin'
            />
            <ContactLink link='mailTo:theran.brigowatz@gmail.com' icon='mail' />
          </div>
          <div className='bottom-writing'>
            <p>
              I am available to discuss freelance, contract, and full-time work opportunities. Check
              out my{' '}
              <a
                href='https://drive.google.com/file/d/1aLnWlQi99yQiJics-bb_t74q1iW26QuS/view'
                target='_blank'
                rel='noopener noreferrer'>
                resume.
              </a>{' '}
              Please get in touch with me, or check out my{' '}
              <Link href='/blog'>
                <a>blog</a>
              </Link>
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
