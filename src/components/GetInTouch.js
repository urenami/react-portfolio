// Importing React and the useState hook from the React library to manage state
import React, { useState } from "react";
// Importing the associated CSS file for styling the component
import "./CSS/GetInTouch.css";

// Define the GetInTouch functional component
const GetInTouch = () => {
  // useState hook to manage the state of the form data
  const [formData, setFormData] = useState({
    name: "",     // State for storing the user's name
    email: "",    // State for storing the user's email
    message: "",  // State for storing the message from the user
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    // Update the formData state with the new input values
    setFormData({
      ...formData,                // Spread the previous state to retain other values
      [e.target.name]: e.target.value, // Dynamically update the field based on input name
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission action (page reload)
    e.preventDefault();
    // Log the form data to the console (could be replaced with actual form submission)
    console.log("Form submitted:", formData);
  };

  return (
    // Main container for the contact form
    <div className="contact-form">
      {/* Heading for the section */}
      <h2>Get in Touch</h2>

      {/* Section to display a note or information about the form */}
      <div className="note-message">
        <p>
          Note: This is a freeform page where you can send me your message. I
          will get back to you soon!
        </p>
      </div>

      {/* Form to handle user input */}
      <form onSubmit={handleSubmit}>
        {/* Form group for the name input field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          {/* Text input for the user's name */}
          <input
            type="text"
            name="name"                // The 'name' attribute to map to the state
            value={formData.name}      // The value of the input is tied to the state
            onChange={handleChange}    // Event handler for changes to the input
            required                   // This field is required to submit the form
          />
        </div>

        {/* Form group for the email input field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          {/* Email input for the user's email */}
          <input
            type="email"
            name="email"               // The 'name' attribute to map to the state
            value={formData.email}     // The value of the input is tied to the state
            onChange={handleChange}    // Event handler for changes to the input
            required                   // This field is required to submit the form
          />
        </div>

        {/* Form group for the message input field */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          {/* Textarea for the user's message */}
          <textarea
            name="message"             // The 'name' attribute to map to the state
            value={formData.message}  // The value of the textarea is tied to the state
            onChange={handleChange}   // Event handler for changes to the textarea
            required                  // This field is required to submit the form
          />
        </div>

        {/* Submit button to send the form data */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Export the GetInTouch component so it can be used in other parts of the application
export default GetInTouch;
