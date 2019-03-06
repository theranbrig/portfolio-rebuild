import React, { useEffect, useState } from 'react';
import ProjectLayout from '../components/ProjectLayout';
import data from '../static/data';

const Project = props => {
  const [project, setProject] = useState({});

  useEffect(() => {
    data.forEach(item => {
      if (item.slug === props.query.name) {
        setProject({ ...item });
      }
    });
  }, []);

  return <ProjectLayout project={project} />;
};

export default Project;
