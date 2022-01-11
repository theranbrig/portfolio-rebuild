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
    mobile,
  } = props.project;

  return (
    <ProjectStyles>
      <div className='project-title'>
        <div className='top-title'>
          <h1>{title}</h1>
          <img src={`../icons/${icon}.svg`} alt={icon} />
        </div>
        <p>{description}</p>
        <div className='project-links'>
          {gitLink ? (
            <a href={gitLink} target='_blank' rel='noopener noreferrer' className='git-link'>
              <img src='../icons/github-blue.svg' alt='github' />
              <p>Code</p>
            </a>
          ) : (
            <p className='private'>Code is in private repo.</p>
          )}
        </div>
        <div className='project-icons'>
          {tech &&
            tech.map((el, idx) => <img src={`../icons/${el}.svg`} key={el} alt={`${el} icon`} />)}
        </div>
      </div>
      <div className='project-info'>
        <div className='project-left'>
          <div className='project-writing'>
            {extendedDescription.map((description, idx) => (
              <p key={idx}>{description}</p>
            ))}
            <p>
              Built with: <strong>{technology}</strong>
            </p>
            <p>Started in {created}</p>
            <a href='/portfolio'>
              <img src='../icons/return.svg' alt='return' /> <span>Back To Portfolio</span>
            </a>
          </div>
        </div>
        <div className='project-right'>
          <div
            className={`project-images ${mobile ? 'mobile' : ''} ${
              screenShots.length === 1 ? 'solo-photo' : ''
            }`}>
            {screenShots &&
              screenShots.map((photo, idx) => (
                <ProgressiveImage
                  preview={photo.preview}
                  image={photo.image}
                  key={photo.image}
                  alt={`${title} screenshot ${idx}`}
                />
              ))}
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
};

ProjectLayout.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectLayout;
