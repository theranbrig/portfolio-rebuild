import styled from 'styled-components';

const AboutPageStyles = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 10px 0 10vh;
  width: 100%;
  margin: 0 auto;
  .about-main {
    width: 900px !important;
    max-width: 95%;
    margin: 0 auto;
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
    h1 {
      font-weight: 100;
    }
    h2,
    h3,
    li {
      font-family: ${(props) => props.theme.raleFont};
      font-weight: 100;
      text-align: center;
    }
    h2 {
      font-family: ${(props) => props.theme.spaceFont};
    }
    p {
      font-family: ${(props) => props.theme.robFont};
      letter-spacing: 0.05rem;
      line-height: 1.7;
      font-size: 1rem;
      margin: 1.2rem auto !important;
      font-weight: 300;
      color: ${(props) => props.theme.white};
      margin-bottom: 15px;
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
        padding: 10px 0;
      }
      img {
        height: 4rem;
        fill: ${(props) => props.theme.white};
        fill: ${(props) => props.theme.blue};
        @media (max-width: 900px) {
          font-size: 3rem;
        }
      }
      p {
        font-size: 1.4rem;
        padding: 5px;
        margin: 0 auto 10px;
        font-family: ${(props) => props.theme.firaFont};
        @media (max-width: 900px) {
          font-size: 1.1rem;
        }
      }
    }
    ul.secondary-skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 50px;
      grid-column-gap: 40px;
      justify-items: center;
      align-items: center;
      text-align: center;
      @media (max-width: 450px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(6, 1fr);
        padding: 10px 0px;
      }

      li {
        font-size: 1.4rem;
        font-family: ${(props) => props.theme.firaFont};
        @media (max-width: 900px) {
          font-size: 1.1rem;
        }
      }
    }
    .skills-to-learn {
      p {
        text-align: center;
        padding: 3px;
        @media (max-width: 900px) {
          font-size: 1.1rem;
        }
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
