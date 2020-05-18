import React, { useContext } from 'react';
import { icons, skills } from '../static/data';

import AboutPageStyles from '../components/styles/AboutPageStyles';
import GraphQLImage from '../static/graphql.svg';
import GraphQLImageDark from '../static/graphqldark.svg';
import Head from 'next/head';
import IconLink from '../components/IconLink';
import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | About Me</title>
      </Head>
      <AboutPageStyles>
        <div className='about-main'>
          <h1>therAn briGoWAtz</h1>
          <img
            src='https://res.cloudinary.com/dq7uyauun/image/upload/q_auto/v1551968239/IMG_1880.jpg'
            alt='Theran Brigowatz Profile'
          />
          <h2>About Me</h2>
          <p>
            I am a full stack web developer with an eye for design who decided to make a career
            change after more than a decade in the education industry. An education at Bloc has
            given me a love of all things Javascript on both the front end and the back end, but I
            am not afraid to take on new languages, frameworks, and challenges. I have found my
            passion for all things code and development.
          </p>
          <p>
            Coding has given me a new enthusiasm for a career that I love, after a decade of
            energetic kids and stacks of essays to grade, while teaching in South Korea. Since my
            childhood, I have had a passion to create, whether it be art, food, or DIY. My interest
            in new technology is something that I have always had a great curiosity in pursuing and
            learning. I am constantly pushing myself to learn and grow as programmer. I enjoy
            spending time with my family, traveling, cooking, brewing craft beer, and the Minnesota
            Golden Gophers.
          </p>
          <p>
            I am open to work in South Korea, the United States, or remote positions right now. Time
            zones are no restriction. With a newborn son who doesn't sleep much, I am always up.
            Drop me a line and get in touch about work opportunities.
          </p>
          <div className='skills-box'>
            <h2>My Tech Stack</h2>
            <div className='skill-list'>
              <h3>Daily Use</h3>
              <ul className='daily-list'>
                {icons.map((icon) => (
                  <li key={icon.icon}>
                    <i className={icon.icon} />
                    <p>{icon.skill}</p>
                  </li>
                ))}
                <li>
                  <img src={GraphQLImage} alt='graphql' style={{ height: '55px' }} />
                  <p>GraphQL</p>
                </li>
              </ul>
            </div>
            <div className='skills-i-know'>
              <h3>No Slouch With</h3>
              <ul className='secondary-skills'>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <h3>Skills In the Pipeline</h3>
            <div className='skills-to-learn'>
              <p>Give me your best shot. I'll take on anything else you throw at me.*</p>
              <p>*Also Sausage Making and Charcuterie.</p>
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </Layout>
  );
};

export default About;
