import Head from 'next/head';
import PortfolioPageStyles from '../components/styles/PortfolioPageStyles';
import Layout from '../components/Layout';
import data from '../static/data';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => (
  <Layout>
    <Head>
      <title>Theran Brigowatz | Portfolio</title>
    </Head>
    <PortfolioPageStyles>
      <h1>Portfolio</h1>
      <h2>Check out the projects to read more about the build process, code, and deploys.</h2>
      <div className="project-list">
        {data.map(project => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </PortfolioPageStyles>
  </Layout>
);

export default Portfolio;
