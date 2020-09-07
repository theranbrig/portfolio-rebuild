import styled from 'styled-components';

const PortfolioPageStyles = styled.div`
  background-color: ${(props) => props.theme.black};

  justify-items: center;
  align-items: center;
  padding: 30px 0 10px;
  min-height: 90vh;
  .project-list {
    justify-content: space-around;
    align-items: space-around;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 0 30px 0;
    width: 800px;
    max-width: 85%;
    margin: 0 auto 10vh;
    .individual-project {
      width: 40%;
      margin-top: 20px;
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
        font-size: 4rem;
        text-align: center;
        margin-right: 20px;
        width: 7rem;
        align-self: center;
      }
      h3 {
        color: ${(props) => props.theme.blue};
        font-weight: 100;
        font-size: 1.8rem;
        margin-bottom: 0;
      }
      h4 {
        color: ${(props) => props.theme.white};
        font-family: ${(props) => props.theme.raleFont};
        font-weight: 300;
        letter-spacing: 0.05rem;
        font-size: 1.1rem;
        margin: 5px 0 15px;
      }
      .project-icons {
        display: flex;
        flex-wrap: wrap;

        img {
          padding: 5px;
          height: 24px;
        }
      }
      .main-icon img {
        height: 4rem;
        display: inline-block;
        margin-right: 40px;
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
    max-width: 90%;
    margin: 0 auto;
    font-family: ${(props) => props.theme.raleFont};
    text-align: center;
  }
  p {
    color: ${(props) => props.theme.white};
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    margin-top: 40px;
    font-size: 1rem;
    font-family: ${(props) => props.theme.raleFont};
    span {
      color: ${(props) => props.theme.orange};
    }
  }
  .icons {
    color: ${(props) => props.theme.white};
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 40px;
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.raleFont};
    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
  }
`;

export default PortfolioPageStyles;
