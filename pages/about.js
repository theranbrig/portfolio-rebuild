import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import GraphQLImage from '../static/graphql.svg';

const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr;
  justify-items: center;
  padding: 50px 30px;
  background-color: ${props => props.theme.black};
  .about-sidebar {
    img {
      border-radius: 50%;
    }
    .sidebar-links {
      a {
        font-family: ${props => props.theme.raleFont};
        color: ${props => props.theme.blue};
        font-size: 1.5rem;
        display: block;
        padding: 20px 0;
      }
    }
  }
  .about-main {
    color: ${props => props.theme.white};
    h1,
    h2 {
      color: ${props => props.theme.blue};
      text-align: center;
    }
    h1,
    h2,
    h3,
    li {
      font-family: ${props => props.theme.raleFont};
      text-align: center;
    }
    p {
      font-size: 1.3rem;
      font-family: ${props => props.theme.raleFont};
      color: ${props => props.theme.white};
      line-height: 2rem;
      letter-spacing: 0.05rem;
    }
    h2 {
      font-size: 1.9rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .daily-list,
    .secondary-skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      text-align: center;
      i {
        font-size: 4rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
    .secondary-skills {
      li {
        font-size: 1.4rem;
      }
    }
    .skills-to-learn {
      p {
        text-align: center;
      }
    }
  }
`;

const About = () => (
  <Layout>
    <AboutStyles>
      <sidebar className="about-sidebar">
        <img size="small" src="/static/IMG_1880.jpg" alt="theran brigowatz logo" circular className="wow fadeIn" />
        <div className="sidebar-links">
          <Link href="/contact">
            <a>
              Contact Me <i className="fas fa-comment" />
            </a>
          </Link>
          <a
            href="https://docs.google.com/document/d/1SUCN4YnYe4dDmCRN1bB_HOuhL9MsZyJNGaQaea3TJtY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <i className="far fa-file" />
          </a>
          <a href="https://twitter.com/wellBuilt" target="_blank" rel="noopener noreferrer">
            Twitter Musings <i className="fab fa-twitter" />
          </a>
          <a href="https://medium.com/@theran.brigowatz" target="_blank" rel="noopener noreferrer">
            Medium Blog <i className="fab fa-medium" />
          </a>
        </div>
      </sidebar>
      <div className="about-main">
        <h1>Theran Brigowatz</h1>
        <h2>About Me</h2>
        <p>
          I am a full stack web developer with an eye for design who decided to make a career change after more than a
          decade in the education industry. An education at Bloc has given me a love of all things Javascript on both
          the front end and the back end, but I am not afraid to take on new languages, frameworks, and challenges. I
          have found my passion for all things code and development.
        </p>
        <p>
          Coding has given me a new enthusiasm for a career that I love, after a decade of energetic kids and stacks of
          essays to grade, while teaching in South Korea. Since my childhood, I have had a passion to create, whether it
          be art, food, or DIY. My interest in new technology is something that I have always had a great curiosity in
          pursuing and learning. I am constantly pushing myself to learn and grow as programmer. I enjoy spending time
          with my family, traveling, cooking, brewing craft beer, and the Minnesota Golden Gophers.
        </p>
        <p>
          I am open to work in South Korea, the United States, or remote positions right now. Time zones are no
          restriction. With a newborn son who doesn't sleep much, I am always up. Drop me a line and get in touch about
          work opportunities.
        </p>
        <div className="skills-box">
          <h2>Skills</h2>
          <div className="skill-list">
            <h3>Daily Use:</h3>
            <ul className="daily-list">
              <li>
                <i className="devicon-html5-plain" />
                <p>HTML</p>
              </li>
              <li>
                <i className="devicon-css3-plain" />
                <p>CSS</p>
              </li>
              <li>
                <i className="devicon-javascript-plain" />
                <p>JavaScript</p>
              </li>
              <li>
                <i className="devicon-react-original" />
                <p>React</p>
              </li>
              <li>
                <i className="devicon-nodejs-plain" />
                <p>Node</p>
              </li>
              <li>
                <i className="devicon-github-plain" />
                <p>Git</p>
              </li>
              <li>
                <i className="devicon-postgresql-plain" />
                <p>PostgreSQL</p>
              </li>
              <li>
                <img src={GraphQLImage} alt="graphql" style={{ height: '55px' }} />
                <p>GraphQL</p>
              </li>
            </ul>
          </div>
          <div className="skills-i-know">
            <h3>No Slouch With:</h3>
            <ul className="secondary-skills">
              <li>Express</li>
              <li>MVC Architecture</li>
              <li>Jasmine</li>
              <li>Jest</li>
              <li>Mongo</li>
              <li>Sass</li>
              <li>Styled Components</li>
              <li>Semantic UI</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Heroku</li>
              <li>Photoshop</li>
            </ul>
          </div>
          <h3>Skills In the Pipeline:</h3>
          <div className="skills-to-learn">
            <p>Give me your best shot. I'll take on anything else you throw at me.*</p>
            <p>*Also Sausage Making and Chacuterie.</p>
          </div>
        </div>
      </div>
    </AboutStyles>
  </Layout>
);

export default About;
