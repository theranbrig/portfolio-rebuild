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
    width: 600px;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 40px;
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
          background: #dcdcdc2f;
          border-radius: 5px;
        }
      }
    }
  }
  .bottom-writing {
    width: 90%;
    margin: 0 auto;
    max-width: 600px;
    p {
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.robFont};
      letter-spacing: 0.1rem;
      line-height: 1.7;
      font-size: 1rem;
      width: 80%;
      margin-left: 10%;
      @media (max-width: 900px) {
        width: 100%;
        margin: 0;
      }
      a {
        color: ${(props) => props.theme.blue};
        text-decoration: none;
      }
    }
  }
  .form-area {
    width: 90%;
    max-width: 800px;
    margin: 30px auto;
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
      border-radius: 5px;
      border: 2px solid ${(props) => props.theme.blue};
      &:hover {
        background: #40a4c874;
        color: ${(props) => props.theme.white};
      }
      &:disabled {
        background: #dcdcdc2f;
      }
    }

    textarea,
    input {
      background-color: ${(props) => props.theme.white} !important;
      font-family: ${(props) => props.theme.firaFont};
      box-shadow: none;
      border: none;
      width: 350px;
      max-width: 90%;
      margin: 10px auto;
      display: block;
      margin: 0 auto;
      padding: 5px;
      border-radius: 5px;
      border: 2px solid ${(props) => props.theme.blue};
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
    .flex-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 1024px) {
        grid-template-columns: none;
      }
    }
    .input-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export default ContactPageStyles;
