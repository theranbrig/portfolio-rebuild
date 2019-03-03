import React, { useState } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

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
          <Form.Field stackable width={8}>
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </Form.Field>
          <Form.Field stackable width={8}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email Address"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
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
    </div>
  );
};

export default ContactForm;
