import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Browser } from 'react-kawaii';
import ProjectLayout from '../components/ProjectLayout';
import data from '../static/data';
import ErrorPage from './_error';

const Project = ({ query }) => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.forEach(item => {
      if (item.slug === query.name) {
        setProject({ ...item });
      }
    });
    setLoading(false);
  }, []);
  if (loading) return <Browser size={200} mood="blissful" color="#40a4c8" />;
  if (!loading && !Object.keys(project).length) return <ErrorPage />;
  return <ProjectLayout project={project} />;
};

Project.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Project;
