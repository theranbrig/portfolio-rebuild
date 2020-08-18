import styled from 'styled-components';

const BlogPageStyles = styled.div`
  min-height: 90vh;
  background-color: ${(props) => props.theme.white};
  margin: 0 auto;
  padding-bottom: 15vh;
  color: ${(props) => props.theme.black};
  font-family: ${(props) => props.theme.firaFont};
  p,
  h2,
  h3,
  h4,
  h5,
  h6,
  code,
  pre,
  ul,
  .content-image {
    width: 900px;
    margin: 0 auto !important;
    max-width: 90%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.raleFont};
    color: ${(props) => props.theme.darkBlue};
    letter-spacing: 0.05rem;
    margin: 1.5rem auto !important;
    font-weight: 400;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  p {
    font-family: ${(props) => props.theme.robFont};
    letter-spacing: 0.1rem;
    line-height: 1.7;
    font-size: 1rem;
    margin: 1.2rem auto !important;
    font-weight: 300;
  }
  a {
    color: ${(props) => props.theme.darkBlue};
    text-decoration: none;
    font-weight: 400;
    &:hover {
      color: ${(props) => props.theme.orange};
    }
  }
  p code {
    font-family: ${(props) => props.theme.firaFont};
    background: #282a36;
    padding: 2px;
    color: #ffb86c;
    border-radius: 3px;
  }
  pre code {
    font-family: ${(props) => props.theme.firaFont} !important;
  }
  h4 a {
    margin-left: 40px;
    font-size: 1rem;
  }
  .hero-section {
    width: 100vw;
    height: 40vh;
    position: relative;
    overflow: hidden;
    border-bottom: 3px solid ${(props) => props.theme.darkBlue};
    margin-bottom: 50px;
  }
  .hero-image {
    object-fit: cover;
    width: 110%;
    height: 100%;
    margin-left: -10px;
    margin-top: -25%;
    border: none;
    filter: blur(4px);
    @media (max-width: 1024px) {
      width: auto;
      height: 100%;
    }
  }
  .hero-text-container {
    background: #ffffff35;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 3px ${(props) => props.theme.black};
  }
  .hero-text {
    color: ${(props) => props.theme.darkBlue};
    width: 900px;
    max-width: 90%;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 2.4rem;
    }
    background: #ffffffc2;
    padding: 20px;
  }
  .content-image {
    width: 900px;
    margin: 0 auto !important;
    max-width: 90%;
    height: 300px;
    object-fit: cover;
    display: block;
  }

  pre {
    display: block;
    margin: 20px auto;
  }
  li {
    margin-left: 20px;
  }
`;

export default BlogPageStyles;
