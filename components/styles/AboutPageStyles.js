import styled from 'styled-components';

const AboutPageStyles = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 10px 0 10vh;
  max-width: 95%;
  margin: 0 auto;
  .about-sidebar {
    width: 100%;
    align-self: start;
    @media (max-width: 900px) {
      align-self: center;
    }
    .sidebar-links {
      a {
        font-family: ${(props) => props.theme.raleFont};
        color: ${(props) => props.theme.blue};
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
    img {
      border-radius: 50%;
      width: 150px;
      margin-left: calc(50% - 75px);
    }
    width: 100%;
    color: ${(props) => props.theme.white};
    padding-bottom: 50px;
    h1,
    h2 {
      color: ${(props) => props.theme.blue};
      text-align: center;
    }

    h2,
    h3,
    li {
      font-family: ${(props) => props.theme.raleFont};
      text-align: center;
    }
    h1 {
      font-family: ${(props) => props.theme.spaceFont};
      @media (max-width: 900px) {
        display: none;
      }
    }
    p {
      font-size: 1.3rem;
      font-family: ${(props) => props.theme.firaFont};
      color: ${(props) => props.theme.white};
      line-height: 2rem;

      @media (max-width: 900px) {
        width: 95%;
        margin-left: 2.5%;
      }
    }
    h2 {
      font-size: 1.9rem;
      margin-top: 50px;
    }
    h3 {
      font-size: 1.7rem;
      color: ${(props) => props.theme.blue};
      margin: 50px 0 30px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
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
        font-family: ${(props) => props.theme.firaFont};
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
    color: ${(props) => props.theme.blue};
    font-family: ${(props) => props.theme.raleFont};
    font-size: 3rem;
  }
`;

export default AboutPageStyles;
