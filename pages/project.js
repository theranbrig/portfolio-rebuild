import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Browser } from 'react-kawaii';
import ProjectLayout from '../components/ProjectLayout';
import data from '../static/data';
import ErrorPage from './_error';
import LoadingStyles from '../components/styles/LoadingStyles';

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
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (!Object.keys(project).length) return <ErrorPage />;
  if (loading)
    return (
      <LoadingStyles>
        <div>
          <Browser size="80%" mood="blissful" color="#40a4c8" />
          <h1>Loading...</h1>
        </div>
      </LoadingStyles>
    );
  return (
    <>
      <ProjectLayout project={project} />
    </>
  );
};

Project.propTypes = {
  query: PropTypes.object.isRequired,
};

export default Project;
