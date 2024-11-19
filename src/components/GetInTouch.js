// Importing React and the useState hook from the React library to manage state
import React, { useState } from "react";
// Importing the associated CSS file for styling the component
import "./CSS/GetInTouch.css";

// Define the GetInTouch functional component
const GetInTouch = () => {
  // useState hook to manage the state of the form data
  const [formData, setFormData] = useState({
    name: "", // State for storing the user's name
    email: "", // State for storing the user's email
    message: "", // State for storing the message from the user
  });

  // useState hook to manage the submission status
  const [status, setStatus] = useState("");

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    // Update the formData state with the new input values
    setFormData({
      ...formData, // Spread the previous state to retain other values
      [e.target.name]: e.target.value, // Dynamically update the field based on input name
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission action (page reload)

    try {
      // Send the form data to Formspree
      const response = await fetch("https://formspree.io/f/xeoqadoo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (response.ok) {
        setStatus("SUCCESS"); // Update status on success
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("ERROR"); // Update status on error
      }
    } catch (error) {
      setStatus("ERROR"); // Update status on exception
    }
  };

  return (
    // Main container for the contact form
    <div className="contact-form">
      {/* Heading for the section */}
      <h2>Get in Touch</h2>

      {/* Section to display a note or information about the form */}
      <div className="note-message">
        <p>
          Note: You can use this form to send me a message directly. Once
          submitted, you’ll see a confirmation message on this page. I will get
          back to you soon!
        </p>
      </div>

      {/* Display the status message */}
      {status && (
        <p
          className={
            status === "SUCCESS" ? "success-message" : "error-message"
          }
        >
          {status === "SUCCESS"
            ? "Message sent successfully!"
            : "Something went wrong. Please try again."}
        </p>
      )}

      {/* Form to handle user input */}
      <form onSubmit={handleSubmit}>
        {/* Form group for the name input field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name" // Matching id for label
            name="name" // The 'name' attribute to map to the state
            value={formData.name} // The value of the input is tied to the state
            onChange={handleChange} // Event handler for changes to the input
            required // This field is required to submit the form
            autoComplete="name" // Add autocomplete attribute for autofill
          />
        </div>

        {/* Form group for the email input field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email" // Matching id for label
            name="email" // The 'name' attribute to map to the state
            value={formData.email} // The value of the input is tied to the state
            onChange={handleChange} // Event handler for changes to the input
            required // This field is required to submit the form
            autoComplete="email" // Add autocomplete attribute for autofill
          />
        </div>

        {/* Form group for the message input field */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message" // Matching id for label
            name="message" // The 'name' attribute to map to the state
            value={formData.message} // The value of the textarea is tied to the state
            onChange={handleChange} // Event handler for changes to the textarea
            required // This field is required to submit the form
            autoComplete="off" // Disable autofill for the message field
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
