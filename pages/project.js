import React, { useEffect, useState } from 'react';

import ErrorPage from './_error';
import ProjectLayout from '../components/ProjectLayout';
import PropTypes from 'prop-types';
import data from '../static/data';

const Project = ({ query, projectInfo }) => {
  const [project] = useState(projectInfo ? projectInfo : {});

  if (!projectInfo) return <ErrorPage />;

  return <ProjectLayout project={project} />;
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
