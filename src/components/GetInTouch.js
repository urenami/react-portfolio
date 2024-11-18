import React, { useState } from 'react';
import './CSS/GetInTouch.css'; 

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Here, you can add additional logic to handle form submission, like sending an API request.
  };

  return (
    <div className="contact-form">
  <h2>Get in Touch</h2>
  
  {/* Note message */}
  <div className="note-message">
    <p>
    Note: This is a freeform page where you can send me your message. I will get back to you soon!
    </p>
  </div>
  
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

  );
};

export default GetInTouch;
