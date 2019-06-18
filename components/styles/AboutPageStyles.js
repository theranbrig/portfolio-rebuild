import styled from 'styled-components';

const AboutPageStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  padding: 40px 30px;
  background-color: ${props => props.theme.black};
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 1fr minmax(500px, 2fr);
    padding: 10px;
  }
  @media (max-width: 450px) {
    grid-template-rows: 1fr minmax(500px, 3fr);
  }
  .about-sidebar {
    width: 100%;
    align-self: start;
    @media (max-width: 900px) {
      align-self: center;
    }
    img {
      border-radius: 50%;
      width: 150px;
      margin-left: calc(50% - 75px);
    }
    .sidebar-links {
      a {
        font-family: ${props => props.theme.raleFont};
        color: ${props => props.theme.blue};
        font-size: 1.5rem;
        display: block;
        padding: 20px 0;
        width: 60%;
        margin-left: 20%;
        @media (max-width: 900px) {
          text-align: center;
        }
      }
    }
    h1 {
      @media (min-width: 900px) {
        display: none;
      }
    }
  }
  .about-main {
    width: 100%;
    color: ${props => props.theme.white};
    padding-bottom: 50px;
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
    h1 {
      @media (max-width: 900px) {
        display: none;
      }
    }
    p {
      font-size: 1.3rem;
      font-family: ${props => props.theme.raleFont};
      color: ${props => props.theme.white};
      line-height: 2rem;
      letter-spacing: 0.05rem;
      @media (max-width: 900px) {
        width: 95%;
        margin-left: 2.5%;
      }
    }
    h2 {
      font-size: 1.9rem;
    }
    h3 {
      font-size: 1.7rem;
      color: ${props => props.theme.blue};
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .daily-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr 1fr;
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      text-align: center;
      @media (max-width: 450px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 1fr);
        padding: 10px;
      }
      i {
        font-size: 4rem;
      }
      p {
        font-size: 1.4rem;
        padding: 5px;
      }
    }
    ul.secondary-skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      text-align: center;
      @media (max-width: 450px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(6, 1fr);
        padding: 10px;
      }

      li {
        font-size: 1.4rem;
      }
    }
    .skills-to-learn {
      p {
        text-align: center;
        padding: 3px;
      }
    }
  }
  h1 {
    text-align: center;
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.raleFont};
    font-size: 3rem;
    text-transform: uppercase;
  }
`;

export default AboutPageStyles;
