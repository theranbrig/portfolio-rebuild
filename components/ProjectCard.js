import React from 'react';
import Link from 'next/link';
import GraphQLImage from '../static/graphql.svg';

const ProjectCard = props => {
  const { title, description, tech, logo, slug, icon } = props.project;

  return (
    <div className="individual-project">
      <Link href={{ pathname: '/project', query: { name: slug } }}>
        <a>
          <i className={icon} />
          <h3>{title}</h3>
          <h4>{description}</h4>
          <div className="project-icons">
            {tech.map(el => {
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
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
