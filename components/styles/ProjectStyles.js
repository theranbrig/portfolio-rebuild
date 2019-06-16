import styled from 'styled-components';

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
  div.project-images img {
    border: 2px solid ${props => props.theme.blue};
    padding: 10px;
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

export default ProjectStyles;
