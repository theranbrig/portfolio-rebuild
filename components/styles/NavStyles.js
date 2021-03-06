import styled from 'styled-components';

const NavStyles = styled.div`
  background: ${(props) => props.theme.black};

  .navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background: ${(props) => props.theme.black};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    a {
      font-family: ${(props) => props.theme.raleFont};
      font-weight: 400;
      font-size: 1.3rem;
      color: ${(props) => props.theme.white};
      text-decoration: none;
      @media (max-width: 760px) {
        font-size: 1.1rem;
      }
      &:hover {
        color: ${(props) => props.theme.blue};
      }
    }
    .active {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export default NavStyles;
