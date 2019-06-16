/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Particles from 'react-particles-js';
import React, { useContext } from 'react';
import Head from 'next/head';
import ParticleParams from '../static/ParticleParams.json';
import Layout from '../components/Layout';
import data from '../static/data';
import ProjectCard from '../components/ProjectCard';
import IconLink from '../components/IconLink';
import HomePageStyles from '../components/styles/HomePageStyles';
import { DarkContext } from '../components/context/DarkContext';

const Home = () => {
  const { darkMode } = useContext(DarkContext);
  console.log('Welcome to the the Console.  Hopefully you see no red.');
  console.log('Thanks for checking out my site.  Check out my github @ https://github.com/theranbrig');
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Web Developer</title>
      </Head>
      <HomePageStyles>
        <div className="main-content">
          <div className="splash-box">
            <img
              src={
                darkMode
                  ? 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_320/v1551529192/theran-logo.png'
                  : 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_320/v1551529192/theran-logo-Original-dark.png'
              }
              alt="Theran Brigowatz Logo"
            />
            <h1>HI. I'M THERAN.</h1>
            <h2>I'm a Full-Stack Web Developer. Check out some of the cool stuff I've made.*</h2>
            <h3>
              See some of{' '}
              <Link href="/portfolio">
                <a>my code</a>
              </Link>{' '}
              and learn more{' '}
              <Link href="/about">
                <a>about me</a>
              </Link>
              .
            </h3>
            <div className="splash-icons">
              <IconLink name="" link="https://github.com/theranbrig" icon="fab fa-github" />
              <IconLink name="" link="https://twitter.com/wellBuilt" icon="fab fa-twitter" />
              <IconLink name="" link="https://medium.com/@theran.brigowatz" icon="fab fa-medium-m" />
              <IconLink name="" link="https://linkedin.com/in/theran-brigowatz" icon="fab fa-linkedin-in" />
            </div>
          </div>
        </div>
        <Particles className="particle-canvas" params={ParticleParams} />
        <div className="projects">
          <p>Click more on a project below to see the process, read the code, and use the deploy.</p>
          <div className="project-list">
            {data.map(project => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </HomePageStyles>
    </Layout>
  );
};

export default Home;
