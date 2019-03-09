import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectLayout from '../components/ProjectLayout';
import data from '../static/data';

const Project = ({ query }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    data.forEach(item => {
      if (item.slug === query.name) {
        setProject({ ...item });
      }
    });
  }, []);

  return <ProjectLayout project={project} />;
};

Project.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Project;
