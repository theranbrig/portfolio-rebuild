import styled from 'styled-components';

const ContactPageStyles = styled.div`
  min-height: 90vh;
  background-color: ${(props) => props.theme.black};
  padding-top: 10px;
  margin: 0 auto;
  .contact-title {
    p {
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.raleFont};
    }
    h1 {
      font-size: 3rem;
      color: ${(props) => props.theme.blue};
      font-family: ${(props) => props.theme.raleFont};
      font-weight: 100;
      text-align: center;
    }
    p {
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.firaFont};
      text-align: center;
    }
  }
  div.social-icons {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    a {
      width: 100%;
      font-family: ${(props) => props.theme.raleFont};
      text-decoration: none;
      text-align: center;
      p {
        padding: 5px;
        font-size: 1rem;
        color: ${(props) => props.theme.white};
      }
      img {
        height: 3rem;
        padding: 5px;
        @media (max-width: 900px) {
          font-size: 2.8rem;
        }
        &:hover {
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${(props) => props.theme.white};
          fill: green !important;
          background: #dcdcdc2f;
          border-radius: 5px;
        }
      }
    }
  }
  .bottom-writing {
    width: 90%;
    margin: 0 auto;
    max-width: 800px;
    p {
      color: ${(props) => props.theme.white};
      font-size: 1.3rem;
      font-family: ${(props) => props.theme.firaFont};
      width: 80%;
      margin-left: 10%;
      @media (max-width: 900px) {
        width: 100%;
        margin: 0;
        font-size: 1.1rem;
      }
      a {
        color: ${(props) => props.theme.blue};
      }
    }
  }
  .form-area {
    width: 60%;
    margin: 20px 20%;
    padding-bottom: 10vh;
    font-family: ${(props) => props.theme.firaFont};
    text-align: center;
    h2 {
      color: ${(props) => props.theme.blue};
      font-family: ${(props) => props.theme.firaFont};
      text-align: center;
    }
    button {
      color: ${(props) => props.theme.blue};
      margin: 10px;
      border: none;
      padding: 5px 10px;
      font-size: 20px;
      background: none;
      margin-top: 20px;
      font-family: ${(props) => props.theme.firaFont};
      &:hover {
        background: #40a4c874;
        color: ${(props) => props.theme.white};
      }
    }
    textarea {
      height: 200px;
    }
    textarea,
    input {
      background-color: ${(props) => props.theme.white} !important;
      font-family: ${(props) => props.theme.firaFont};
      box-shadow: none;
      border: none;
      width: 300px;
      max-width: 90%;
      margin: 10px auto;
      display: block;
      margin: 0 auto;
      padding: 5px;
    }
    @media (max-width: 900px) {
      width: 90%;
      margin: 0;
      margin-left: 5%;
    }
    label {
      color: ${(props) => props.theme.white};
      display: block;
      margin: 10px 0;
    }
    label::after {
      color: ${(props) => props.theme.blue} !important;
    }
  }
`;

export default ContactPageStyles;
