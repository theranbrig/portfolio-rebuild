import React, { useEffect, useState } from 'react';

import ErrorPage from './_error';
import Layout from '../components/Layout';
import LoadingStyles from '../components/styles/LoadingStyles';
import ProjectLayout from '../components/ProjectLayout';
import PropTypes from 'prop-types';
import data from '../static/data';
import { motion } from 'framer-motion';

const Project = ({ query }) => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    data.forEach((item) => {
      if (item.slug === query.name) {
        setProject({ ...item });
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading)
    return (
      <LoadingStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div>
            {/* <Browser size='80%' mood='blissful' color='#40a4c8' /> */}
            <h1>Loading...</h1>
          </div>
        </motion.div> 
      </LoadingStyles>
    );
  if (!Object.keys(project).length) return <ErrorPage />;
  return (
    <motion.div
      exit={{ opacity: 0, x: '100vw' }}
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
      <ProjectLayout project={project} />
    </motion.div>
  );
};

Project.propTypes = {
  query: PropTypes.object.isRequired,
};

export default Project;
