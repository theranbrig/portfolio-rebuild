import React, { useEffect, useRef } from 'react';

import Head from 'next/head';
import HomePageStyles from '../components/styles/HomePageStyles';
import IconLink from '../components/IconLink';
import Layout from '../components/Layout';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Home = () => {
  const typedRef = useRef(null);
  console.log('Welcome to the the Console.  Hopefully you see no red.');
  console.log(
    'Thanks for checking out my site.  Check out my github @ https://github.com/theranbrig'
  );

  const strings = ["I'm a Web Developer<br/> and UI Builder."];

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
      <Head>
        <title>Theran Brigowatz | Web Developer</title>
      </Head>
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
                <IconLink name='' link='https://github.com/theranbrig' icon='fab fa-github' />
                <IconLink name='' link='https://twitter.com/wellBuilt' icon='fab fa-twitter' />
                <IconLink
                  name=''
                  link='https://linkedin.com/in/theran-brigowatz'
                  icon='fab fa-linkedin-in'
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
