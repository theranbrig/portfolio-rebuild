import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from './Layout';
import GraphQLImage from '../static/graphql.svg';
import ProjectStyles from './styles/ProjectStyles';

const ProjectLayout = props => {
  console.log(props);
  const {
    title,
    technology,
    deployLink,
    gitLink,
    created,
    description,
    extendedDescription,
    icon,
    screenShots,
    tech,
  } = props.project;
  console.log(screenShots);
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | {title}</title>
      </Head>
      <ProjectStyles>
        <div className="project-title">
          <h1>
            {title} <i className={icon} />
          </h1>
          <p>{description}</p>
          <div className="project-icons">
            {tech &&
              tech.map(el => {
                if (el === 'graphql') {
                  return (
                    <img
                      src={GraphQLImage}
                      alt="graphql"
                      className="graphql-logo"
                      style={{ padding: '0 7px 0 5px', height: '28px' }}
                      key={el}
                    />
                  );
                }
                return <i className={el} key={el} />;
              })}
          </div>
        </div>
        <div className="project-info">
          <div className="project-left">
            <div className="project-links">
              <a href={deployLink} target="_blank" rel="noopener noreferrer">
                Deployed Version <i className="fas fa-external-link-square-alt" />
              </a>
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                See The Code <i className="fab fa-github" />
              </a>
            </div>
            <div className="project-writing">
              <p>{extendedDescription}</p>
              <p>
                Built with: <strong>{technology}</strong>
              </p>
              <p>Started in {created}</p>
              <a href="/portfolio">
                <i className="far fa-caret-square-left" /> <span>Back To Portfolio</span>
              </a>
            </div>
          </div>
          <div className="project-right">
            <div className="project-images">
              {screenShots && screenShots.map(photo => <img src={photo} alt={photo} />)}
            </div>
          </div>
        </div>
      </ProjectStyles>
    </Layout>
  );
};

ProjectLayout.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectLayout;
