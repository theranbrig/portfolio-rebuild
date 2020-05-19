import styled from 'styled-components';

const LoadingStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  min-height: calc(100vh);
  background: ${(props) => props.theme.black};
  h1 {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    color: gainsboro;
  }
`;

export default LoadingStyles;
