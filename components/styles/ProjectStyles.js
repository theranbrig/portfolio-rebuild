import styled from 'styled-components';

const ProjectStyles = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 900px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: min-max(180px, 1fr) 9fr;

  margin: 0 auto;
  padding: 0 0 10vh 0;
  @media (max-width: 900px) {
    padding: 20px;
  }
  .project-info {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    padding-bottom: 10vh;
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
    margin: 10px auto;
  }
  .project-title {
    color: ${(props) => props.theme.blue};
    text-align: center;
    h1 {
      font-size: 5rem;
      font-family: ${(props) => props.theme.raleFont};
      margin: 15px 0 0;
      font-weight: 100;
      i {
        color: ${(props) => props.theme.white};
      }
    }
    p {
      font-weight: 100;
      font-family: ${(props) => props.theme.firaFont};
      font-size: 1.3rem;
      color: ${(props) => props.theme.white};
    }
    .project-icons {
      margin-top: 20px;
      i {
        color: ${(props) => props.theme.white};
        padding: 3px;
        font-size: 30px;
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
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.firaFont};
      font-weight: 100;
      line-height: 2rem;
    }
  }
  .project-links {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    width: 50%;
    margin: 0 auto;
    justify-content: space-between;
    a {
      color: ${(props) => props.theme.blue};
      font-family: ${(props) => props.theme.raleFont};
      text-decoration: none;
      font-size: 1.3rem;
    }
  }
`;

export default ProjectStyles;
