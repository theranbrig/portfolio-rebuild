import React, { useEffect, useRef } from 'react';

import HomePageStyles from '../components/styles/HomePageStyles';
import IconLink from '../components/IconLink';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Home = () => {
  const typedRef = useRef(null);
  console.log(
    '  d8   888                                                     888                    '
  );
  console.log(
    '_d88__ 888-~88e  e88~~8e  888-~    /~~~8e  888-~88e        e88~888  e88~~8e  Y88b    /'
  );
  console.log(
    ' 888   888  888 d888  88b 888          88b 888  888      d888  888 d888  88b  Y88b  / '
  );
  console.log(
    ' 888   888  888 8888__888 888     e88~-888 888  888      8888  888 8888__888   Y88b/  '
  );
  console.log(
    ' 888   888  888 Y888    , 888    C888  888 888  888 d88b Y888  888 Y888    ,    Y8/   '
  );
  console.log(
    '  88_/ 888  888  "88___/  888     "88_-888 888  888 Y88P  "88_/888  "88___/      Y    '
  );
  console.log('Welcome to the the Console.  Hopefully you see no red.');
  console.log(
    'Thanks for checking out my site.  Check out my github @ https://github.com/theranbrig'
  );

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
