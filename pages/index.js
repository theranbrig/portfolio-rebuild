import React, { useEffect, useRef } from 'react';

import HomePageStyles from '../components/styles/HomePageStyles';
import IconLink from '../components/IconLink';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Home = () => {
  const typedRef = useRef(null);

  const strings = ["I'm a Web Developer<br/> and UI Consultant."];

  const options = {
    strings,
    typeSpeed: 50,
    backSpeed: 50,
  };
  // this.el refers to the <span> in the render() method
  useEffect(() => {
    const typed = new Typed(typedRef.current, options);
  }, []);

  return (
    <Layout>
      <NextSeo title='Theran Brigowatz | Home' description='Web Developer and UI Consultant' />
      <motion.div
        exit={{ opacity: 0, scale: 0 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
        <HomePageStyles>
          <div className='main-content'>
            <div className='splash-box'>
              <h1>therAn briGoWAtz</h1>
              <div className='typed-content'>
                <span className='typed' ref={typedRef} style={{ whiteSpace: 'pre' }} />
              </div>
              <div className='splash-icons'>
                <IconLink
                  name='Theran Brigowatz Github'
                  link='https://github.com/theranbrig'
                  icon='github-blue'
                  alt='Link to GitHub'
                />
                <IconLink
                  name='Theran Brigowatz linked in'
                  link='https://dev.to/theranbrig'
                  icon='dev'
                  alt='Link to Dev.to'
                />
                <IconLink
                  name='Theran Brigowatz Twitter'
                  link='https://twitter.com/wellBuilt'
                  icon='twitter'
                  alt='Link to Twitter'
                />
                <IconLink
                  name='Theran Brigowatz Linkedin'
                  link='https://linkedin.com/in/theran-brigowatz'
                  icon='linkedin'
                  alt='Link to Linkedin'
                />
              </div>
            </div>
          </div>
        </HomePageStyles>
      </motion.div>
    </Layout>
  );
};

export default Home;
