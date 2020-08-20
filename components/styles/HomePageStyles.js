import styled from 'styled-components';

const HomePageStyles = styled.div`
  background: ${(props) => props.theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  max-width: 95%;
  margin: 0 auto;
  .main-content {
    a {
      color: ${(props) => props.theme.blue};
    }
  }
  .splash-box {
    max-width: 95%;
    margin: 0 auto;
    color: ${(props) => props.theme.white};
    h1 {
      color: ${(props) => props.theme.blue};
      font-size: 5rem;
      text-align: center;
      font-family: ${(props) => props.theme.spaceFont};
      font-weight: 100;
      margin-top: 0px;
      @media (max-width: 760px) {
        font-size: 3.2rem;
      }
    }
    @media (max-width: 760px) {
      width: 90%;
      padding: 20px 10px;
    }
    .typed-content span {
      font-family: ${(props) => props.theme.firaFont};
      color: ${(props) => props.theme.white};
      font-weight: 100;
      max-width: 100%;
      margin-top: 15px;
      font-size: 2rem;
      @media (max-width: 760px) {
        font-size: 1.7rem;
        line-height: 3rem;
      }
    }
    .typed-content {
      text-align: center;
      min-height: 96px;
    }
    .splash-icons {
      margin: 50px auto 0;
      width: 70%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      img {
        padding: 5px;
        height: 2.5rem;
        margin: 0;
        &:hover {
          background: #dcdcdc2;
          border-radius: 5px;
        }
      }
    }
    h2,
    h3 {
      text-align: center;
      font-family: ${(props) => props.theme.raleFont};
    }
    h3 {
      margin-bottom: 30px;
    }
  }
`;

export default HomePageStyles;
