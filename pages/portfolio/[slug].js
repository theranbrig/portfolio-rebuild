import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import ProjectLayout from '../../components/ProjectLayout';
import PropTypes from 'prop-types';
import data from '../../public/data';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

const Project = ({ query, projectInfo }) => {
  console.log(projectInfo);
  const [project] = useState(projectInfo ? projectInfo : {});

  return (
    <Layout>
      <NextSeo
        title={`Theran Brigowatz | ${project.title}`}
        description={project.description}
        openGraph={{
          url: `https://theran.dev/?name=${project.slug}`,
          images: [{ url: project.screenShots[0].image, alt: `${project.title} screenshot` }],
        }}
      />
      <motion.div
        exit={{ opacity: 0, scale: 0 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
        <ProjectLayout project={project} />
      </motion.div>
    </Layout>
  );
};

Project.propTypes = {
  query: PropTypes.object.isRequired,
};

Project.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const projectInfo = data.filter((item) => {
    return item.slug === slug;
  });
  return { projectInfo: projectInfo[0] };
};

export default Project;
