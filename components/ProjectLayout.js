import React, { useContext } from 'react';

import Head from 'next/head';
import Layout from './Layout';
import ProgressiveImage from './ProgressiveImage';
import ProjectStyles from './styles/ProjectStyles';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectLayout = (props) => {
  const {
    title,
    technology,
    deployLink,
    gitLink,
    created,
    description,
    extendedDescription,
    icon,
    screenShots,
    tech,
  } = props.project;

  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Project</title>
      </Head>
      <ProjectStyles>
        <motion.div
          exit={{ opacity: 0, x: '-100vw' }}
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div className='project-title'>
            <div className='top-title'>
              <h1>{title}</h1>
              <img src={`../static/icons/${icon}.svg`} alt='github' />
            </div>
            <p>{description}</p>
            <div className='project-links'>
              <a href={deployLink} target='_blank' rel='noopener noreferrer'>
                <img src='../static/icons/db.svg' alt='deploy' />
                <p>Deployed Version</p>
              </a>
              <a href={gitLink} target='_blank' rel='noopener noreferrer'>
                <img src='../static/icons/github-blue.svg' alt='github' />
                <p>Code</p>
              </a>
            </div>
            <div className='project-icons'>
              {tech && tech.map((el) => <img src={`../static/icons/${el}.svg`} key={el} />)}
            </div>
          </div>
          <div className='project-info'>
            <div className='project-left'>
              <div className='project-writing'>
                <p>{extendedDescription}</p>
                <p>
                  Built with: <strong>{technology}</strong>
                </p>
                <p>Started in {created}</p>
                <a href='/portfolio'>
                  <img src='../static/icons/return.svg' alt='github' />{' '}
                  <span>Back To Portfolio</span>
                </a>
              </div>
            </div>
            <div className='project-right'>
              <div className='project-images'>
                {screenShots &&
                  screenShots.map((photo) => (
                    <ProgressiveImage
                      preview={photo.preview}
                      image={photo.image}
                      key={photo.image}
                    />
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </ProjectStyles>
    </Layout>
  );
};

ProjectLayout.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectLayout;
