import styled from 'styled-components';

const ContactPageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 2fr 1fr 4fr;
  padding: 30px;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.black};
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 4fr 2fr 3fr;
  }
  .contact-title {
    img {
      width: 20%;
    }
    h1,
    p {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  div.social-icons {
    list-style-type: none;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 0;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 100%;
      grid-template-rows: repeat(5, 1fr);
    }
    a {
      width: 100%;
      p {
        padding: 5px;
        font-size: 1rem;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.raleFont};
      }
      i {
        font-size: 5rem;
        color: ${props => props.theme.blue};
        &:hover {
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${props => props.theme.white};
        }
      }
    }
  }
  .bottom-writing {
    p {
      color: ${props => props.theme.white};
      font-size: 1.5rem;
      font-family: ${props => props.theme.raleFont};
      width: 80%;
      margin-left: 10%;
      @media (max-width: 900px) {
        width: 100%;
        margin: 0;
      }
      a {
        color: ${props => props.theme.blue};
      }
    }
  }
  .form-area {
    width: 60%;
    margin: 20px 20%;
    font-family: ${props => props.theme.raleFont};
    h2 {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.raleFont};
    }
    button {
      color: ${props => props.theme.blue} !important;
      margin: 10px;
    }
    textarea {
      height: 200px;
    }
    textarea,
    input {
      background-color: ${props => props.theme.white} !important;
    }
    @media (max-width: 900px) {
      width: 90%;
      margin: 0;
      margin-left: 5%;
    }
    label::after {
      color: ${props => props.theme.blue} !important;
    }
  }
`;

export default ContactPageStyles;
