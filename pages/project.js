import React, { useEffect, useState } from 'react';

import ErrorPage from './_error';
import ProjectLayout from '../components/ProjectLayout';
import PropTypes from 'prop-types';
import data from '../static/data';
import { motion } from 'framer-motion';

const Project = ({ query, projectInfo }) => {
  const [project] = useState(projectInfo ? projectInfo : {});

  if (!projectInfo) return <ErrorPage />;

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

Project.getInitialProps = async ({ query }) => {
  const projectInfo = data.filter((item) => {
    return item.slug === query.name;
  });
  return { projectInfo: projectInfo[0] };
};

export default Project;
