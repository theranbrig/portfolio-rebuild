import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from './Layout';
import GraphQLImage from '../static/graphql.svg';

const ProjectStyles = styled.div`
  background-color: ${props => props.theme.black};
  padding: 30px 50px;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: min-max(180px, 1fr) 9fr;
  @media (max-width: 900px) {
    padding: 20px;
  }
  .project-info {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    @media (max-width: 900px) {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: min-max(180px, 1fr) 9fr;
    }
    a {
      display: block;
      padding: 10px 0;
      color: ${props => props.theme.blue};
      font-family: ${props => props.theme.raleFont};
      @media (max-width: 900px) {
        text-align: center;
      }
    }
  }
  .project-images {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    height: 100%;
    img {
      width: 80%;
      justify-self: end;
      @media (max-width: 900px) {
        justify-self: center;
      }
    }
  }
  .project-title {
    color: ${props => props.theme.blue};
    text-align: center;
    h1 {
      font-size: 5rem;
      font-family: ${props => props.theme.raleFont};
      i {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${props => props.theme.white};
      }
    }
    p {
      font-family: ${props => props.theme.raleFont};
      font-size: 1.5rem;
    }
    .project-icons {
      i {
        color: ${props => props.theme.white};
        padding: 3px;
      }
      img.graphql-logo {
        width: 40px;
        @media (max-width: 900px) {
          height: 30px !important;
          width: 36px;
          margin-bottom: -6px !important;
        }
      }
    }
  }
  .project-writing {
    p {
      font-size: 1.3rem;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
      line-height: 2rem;
      letter-spacing: 0.05rem;
    }
  }
`;

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
