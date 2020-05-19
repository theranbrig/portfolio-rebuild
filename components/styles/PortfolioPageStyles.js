import styled from 'styled-components';

const PortfolioPageStyles = styled.div`
  background-color: ${(props) => props.theme.black};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  padding: 30px 0 0;
  min-height: 90vh;
  .project-list {
    justify-content: space-around;
    align-items: space-around;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 0 30px 0;
    width: 800px;
    max-width: 95%;
    margin: 0 auto 10vh;
    .individual-project {
      width: 40%;
      margin-top: 40px;
      @media (max-width: 760px) {
        width: 100%;
      }
    }
    .project-link {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: ${(props) => props.theme.raleFont};
      .main-icon i {
        color: ${(props) => props.theme.white};
        font-size: 6rem;
        text-align: center;
        margin-right: 20px;
        width: 7rem;
        align-self: center;
      }
      h3 {
        color: ${(props) => props.theme.blue};
      }
      h4 {
        color: ${(props) => props.theme.white};
        font-family: ${(props) => props.theme.firaFont};
      }
      i {
        padding: 0 2px;
        color: ${(props) => props.theme.white};
        font-size: 28px;
      }
      img {
        display: inline-block;
      }
    }
  }
  h1 {
    color: ${(props) => props.theme.blue};
    font-family: ${(props) => props.theme.raleFont};
    font-weight: 100;
    text-align: center;
    padding: 10px 0;
    font-size: 3rem;
    margin: 0 auto;
  }
  h2 {
    font-weight: 100;
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.raleFont};
    max-width: 90%;
    margin: 0 auto;
    font-family: ${(props) => props.theme.firaFont};
    text-align: center;
  }
`;

export default PortfolioPageStyles;
