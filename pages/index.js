/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Particles from 'react-particles-js';
import React from 'react';
import styled from 'styled-components';
import ParticleParams from '../data/ParticleParams.json';
import Layout from '../components/Layout';
import data from '../static/data';
import ProjectCard from '../components/ProjectCard';

const HomeStyles = styled.div`
  background: ${props => props.theme.black};
  .main-content {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    height: 600px;
    img {
      width: 25%;
      margin-left: 37.5%;
    }
    a {
      color: ${props => props.theme.blue};
    }
  }
  .particle-canvas {
    width: 100%;
    height: 600px;
    position: absolute;
    left: 0;
    top: 83px;
    border-bottom: 3px solid ${props => props.theme.blue};
    background: ${props => props.theme.blue}; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      #2a7692,
      ${props => props.theme.blue},
      #2a7692
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      #2a7692,
      ${props => props.theme.blue},
      #2a7692
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .splash-box {
    background-color: #13131394;
    width: 80%;
    padding: 30px 60px;
    z-index: 100;
    border: 3px solid ${props => props.theme.white};
    border-radius: 5px;
    color: ${props => props.theme.white};
    h1 {
      color: ${props => props.theme.blue};
      font-size: 5rem;
      text-align: center;
      font-family: ${props => props.theme.raleFont};
    }
    @media (max-width: 760px) {
      width: 90%;
      padding: 20px 10px;
    }
    .splash-icons {
      width: 60%;
      margin-left: 20%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      align-items: center;
      justify-items: center;
      i {
        font-size: 3rem;
        margin: 0;
      }
    }
    h2,
    h3 {
      text-align: center;
      font-family: ${props => props.theme.raleFont};
    }
    h3 {
      margin-bottom: 30px;
    }
  }
  .projects {
    background-color: ${props => props.theme.black};
    height: 100%;
    width: 100%;
    img {
      width: 120px;
      height: 100px;
    }
    .graphql-logo {
      width: 40px;
    }
    .project-list {
      overflow-x: scroll;
      display: grid;
      height: 320px;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(7, calc(30% - 40px));
      grid-gap: 25px;
      justify-items: center;
      align-items: center;
      margin: 0 25px;
      @media (max-width: 769px) {
        grid-template-columns: repeat(7, calc(60% - 40px));
      }
      @media (max-width: 450px) {
        grid-template-columns: repeat(7, calc(85% - 40px));
      }
      .individual-project a {
        height: 250px;
        display: grid;
        grid-template-rows: 4fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        text-align: center;
        h3 {
          color: ${props => props.theme.blue};
          margin: 5px 0;
          font-size: 1.7rem;
        }
        h4 {
          color: ${props => props.theme.white};
          margin: 5px 0;
        }
        i {
          color: ${props => props.theme.white};
        }
        .project-icons {
          i {
            color: ${props => props.theme.white};
            padding: 3px;
            @media (max-width: 900px) {
              font-size: 1.3rem;
            }
          }
          img.graphql-logo {
            width: 40px;
            @media (max-width: 900px) {
              height: 22px !important;
              width: 30px;
              padding: 1px;
              margin-bottom: -4px !important;
            }
          }
        }
        h3,
        h4 {
          font-family: ${props => props.theme.raleFont};
        }
        i.fas,
        i.far {
          font-size: 8rem;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: ${props => props.theme.blue};
        }
      }
      &:last-child {
        margin-right: 20px;
      }
      &:first-child {
        margin-right: 20px;
      }
    }
  }
  .projects p {
    margin: 0;
    text-align: center;
    font-family: ${props => props.theme.raleFont};
    padding: 10px;
    font-size: 1.5rem;
    color: ${props => props.theme.white};
    background: ${props => props.theme.darkBlack};
    border-bottom: 3px solid ${props => props.theme.blue};
  }
  .active-link {
    color: ${props => props.theme.white};
  }
`;

const Home = () => {
  console.log('Welcome to the the Console.  Hopefully you see no red.');
  console.log('Thanks for checking out my site.  Check out my github @ https://github.com/theranbrig');
  return (
    <Layout>
      <HomeStyles>
        <div className="main-content">
          <div className="splash-box">
            <img
              src="https://res.cloudinary.com/dq7uyauun/image/upload/v1551529192/theran-logo.png"
              id="mainLogoImage"
              className="wow fadeIn"
              alt="Theran Brigowatz Logo"
            />
            <h1>HI. I'M THERAN.</h1>
            <h2>I'm a Full-Stack Web Developer. Check out some of the cool stuff I've made.*</h2>
            <h3>
              See some of{' '}
              <Link href="/portfolio" prefetch>
                <a>my code</a>
              </Link>{' '}
              and learn more{' '}
              <Link href="/about" prefetch>
                <a>about me</a>
              </Link>
              .
            </h3>
            <div className="splash-icons">
              <a href="https://github.com/theranbrig" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
              <a href="https://twitter.com/wellBuilt" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://medium.com/@theran.brigowatz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium-m" />
              </a>
              <a href="https://linkedin.com/in/theran-brigowatz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" />
              </a>
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
      </HomeStyles>
    </Layout>
  );
};

export default Home;
