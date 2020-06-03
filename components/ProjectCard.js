import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectCard = (props) => {
  const { title, description, tech, slug, icon } = props.project;

  return (
    <div className='individual-project'>
      <Link href={{ pathname: '/project', query: { name: slug } }}>
        <a className='project-link'>
          <div className='main-icon'>
            <img src={`icons/${icon}.svg`} alt={icon} />
          </div>
          <div className='project-info'>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <div className='project-icons'>
              {tech.map((el) => (
                <img src={`icons/${el}.svg`} key={el} alt={el} />
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
