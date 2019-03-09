import styled from 'styled-components';

const PortfolioPageStyles = styled.div`
  background-color: ${props => props.theme.black};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  padding: 30px 0 0;
  .project-list {
    justify-items: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 0 30px 0;
  }
  .individual-project {
    flex: 1;
    flex-basis: 30%;
    margin: 20px;
    @media (max-width: 900px) {
      flex-basis: 40%;
    }
    @media (max-width: 450px) {
      flex-basis: 100%;
    }
    a {
      height: 250px;
      text-align: center;
      display: grid;
      grid-template-rows: 4fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
      h3 {
        color: ${props => props.theme.blue};
        margin: 5px 0;
      }
      h4 {
        color: ${props => props.theme.white};
        margin: 5px 0;
      }
      i {
        color: ${props => props.theme.white};
        padding: 3px;
        @media (max-width: 900px) {
          font-size: 1.5rem;
        }
      }
      h3,
      h4 {
        font-family: ${props => props.theme.raleFont};
      }
      i.fas,
      i.far {
        font-size: 8rem;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${props => props.theme.blue};
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
  h1 {
    text-transform: uppercase;
    color: ${props => props.theme.blue};
    font-family: ${props => props.theme.raleFont};
    padding: 10px 0;
    font-size: 3rem;
  }
  h2 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.raleFont};
    max-width: 90%;
    text-align: center;
  }
`;

export default PortfolioPageStyles;
