import styled from 'styled-components';

const BlogsStyles = styled.div`
  background-color: ${(props) => props.theme.white};
  margin: 0 auto;
  padding-bottom: 15vh;
  color: ${(props) => props.theme.black};
  p.dev {
    text-align: center;
      font-size: 1.2rem;
    a {
      color: ${(props) => props.theme.darkBlue};
      text-decoration: none;
    }
  }
  .post-container {
    width: 900px;
    max-width: 80%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-gap: 20px;
    align-items: center;
    border: 2px solid ${(props) => props.theme.darkBlue};
    padding: 20px;
    border-radius: 10px;
    min-height: 180px;
    img {
      width: 200px;
    }
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 1024px) {
      width: 90%;
      grid-template-columns: none;
      grid-template-rows: 4fr 3fr;
      img {
        width: 100%;
      }
    }
  }
  .post-description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.darkBlue};
    font-family: ${(props) => props.theme.raleFont};
    font-weight: 300;
    text-align: center;
  }
  h2 {
    font-family: ${(props) => props.theme.raleFont};
    font-weight: 300;
    color: ${(props) => props.theme.darkBlue};
    margin: 0;
    font-size: 1.4rem;
    min-height: 3rem;
  }
  p {
    font-family: ${(props) => props.theme.robFont};
    font-weight: 300;
    margin: 0;
  }
  .date {
    margin-top: 10px;
  }
`;

export default BlogsStyles;
