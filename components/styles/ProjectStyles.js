import styled from 'styled-components';

const ProjectStyles = styled.div`
  background-color: ${(props) => props.theme.black};

  margin: 0 auto;
  padding-top: 20px;
  max-width: 90%;
  width: 800px;
  @media (max-width: 900px) {
    padding: 20px;
  }

  .project-info {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    padding-bottom: 10vh;
    padding-top: 30px;
    @media (max-width: 900px) {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: min-max(180px, 1fr) 9fr;
    }
    a {
      display: block;
      padding: 10px 0;
      color: ${(props) => props.theme.blue};
      font-family: ${(props) => props.theme.raleFont};
      text-decoration: none;
      font-size: 1.3rem;
      @media (max-width: 900px) {
        text-align: center;
      }
    }
  }
  .project-images {
    display: flex;
    flex-direction: column;
    height: 100%;
    img {
      width: 80%;
      justify-self: end;
      @media (max-width: 900px) {
        justify-self: center;
      }
    }
  }
  div.project-images img {
    border: 2px solid ${(props) => props.theme.blue};
    padding: 5px;
    margin: 0 auto 10px;
  }
  .project-title {
    color: ${(props) => props.theme.blue};
    text-align: center;
    .top-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      h1 {
        font-size: 5rem;
        font-family: ${(props) => props.theme.raleFont};
        font-weight: 100;
        display: inline-block;
        margin: 0;
      }
      img {
        height: 5rem;
        margin-left: 20px;
      }
    }

    p {
      font-weight: 100;
      font-family: ${(props) => props.theme.raleFont};
      font-size: 1.3rem;
      color: ${(props) => props.theme.white};
    }
    .project-icons {
      margin: 20px auto;
      img {
        height: 40px !important;
        padding: 3px;
        font-size: 30px;
      }
    }
  }
  .project-writing {
    p {
      font-family: ${(props) => props.theme.robFont};
      letter-spacing: 0.1rem;
      line-height: 1.7;
      font-size: 1rem;
      margin: 1.2rem auto !important;
      font-weight: 300;
      color: ${(props) => props.theme.white};
      margin: 0 0 30px;
    }
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    a img {
      margin-right: 20px;
      height: 2rem;
    }
  }
  .project-links {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    width: 400px;
    margin: 0 auto;
    justify-content: space-between;
    a {
      text-decoration: none;
      font-size: 1.3rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      p {
        font-family: ${(props) => props.theme.raleFont};
        color: ${(props) => props.theme.blue};
        display: inline;
      }
      img {
        height: 40px;
        margin-right: 10px;
      }
    }
  }
`;

export default ProjectStyles;
