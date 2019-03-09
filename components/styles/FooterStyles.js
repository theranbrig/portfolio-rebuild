import styled from 'styled-components';

const FooterStyles = styled.div`
  border-top: 3px solid ${props => props.theme.blue};
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.darkBlack};
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
  }
  img {
    height: 40px;
  }
  .footer-left {
    display: grid;
    grid-template-rows: 1fr 20px;
    grid-template-columns: 300px;
    grid-gap: 5px;
    margin: 10px;
    @media (max-width: 800px) {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr;
      align-content: space-between;
      margin: 0;
    }
    .footer-nav-links {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      a {
        color: ${props => props.theme.blue};
        @media (max-width: 800px) {
          text-align: end;
        }
      }
      .active {
        color: ${props => props.theme.white};
      }
    }
  }
  .footer-right {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    align-items: center;
    justify-items: end;
    p {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
      text-align: right;
      span {
        color: ${props => props.theme.blue};
      }
    }
    @media (max-width: 800px) {
      font-size: 0.8rem;
    }
  }
`;

export default FooterStyles;
