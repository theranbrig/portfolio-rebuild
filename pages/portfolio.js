import Head from 'next/head';
import Layout from '../components/Layout';
import PortfolioPageStyles from '../components/styles/PortfolioPageStyles';
import ProjectCard from '../components/ProjectCard';
import data from '../static/data';
import { motion } from 'framer-motion';

const Portfolio = () => (
  <Layout>
    <Head>
      <title>Theran Brigowatz | Portfolio</title>
    </Head>
    <PortfolioPageStyles>
      <motion.div
        exit={{ opacity: 0, x: '100vw' }}
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
        <h1>Portfolio</h1>
        <h2>See some code and screenshots.</h2>
        <div className='project-list'>
          {data.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </motion.div>
    </PortfolioPageStyles>
  </Layout>
);

export default Portfolio;
