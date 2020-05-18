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
      font-weight: 100;
      font-size: 1.3rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
    .active {
      color: ${(props) => props.theme.white};
    }
  }
`;

export default NavStyles;
