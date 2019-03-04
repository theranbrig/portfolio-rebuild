import React, { useState } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const SuccessStyles = styled.div`
  height: 20px;
  p {
    font-size: 18px;
    color: ${props => props.theme.blue};
  }
`;

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  function handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => setSuccessMessage('Thanks for getting in touch.  I will get back to you soon.'))
      .catch(error => console.log(error));

    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="contact-form">
      <h2>Send A Quick Message Directly</h2>
      <Form onSubmit={handleSubmit} inverted>
        <Form.Group>
          <Form.Field stackable="true" width={8}>
            <label htmlFor="name">
              Name
              <input
                name="name"
                type="text"
                placeholder="Enter Name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </label>
          </Form.Field>
          <Form.Field stackable="true" width={8}>
            <label htmlFor="email">
              Email
              <input
                name="email"
                type="email"
                placeholder="Enter Email Address"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field
            name="message"
            control={TextArea}
            placeholder="Send a quick message to get in touch about development inquiries."
            label="Message"
            width={16}
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </Form.Group>
        <Button inverted type="submit">
          Submit!
        </Button>
      </Form>
      <SuccessStyles>{successMessage && <p>{successMessage}</p>}</SuccessStyles>
    </div>
  );
};

export default ContactForm;
