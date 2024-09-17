import React, { useState } from 'react';

function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      
      setSubmitted(true);  // Show success message
    } catch (error) {
      console.error('Form submission error: ', error);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form
          name="contact"
          method="GET"
          data-netlify="true"
          netlify-honeypot="bot-field" // Anti-spam honeypot
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
        >

          <h2 className="text-2xl font-bold mb-4">Request the next Challenge</h2>

          {/* Email input */}
          <label className="block mb-4">
            <span className="text-gray-700">Enter your email:</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Request Challenge 2
          </button>
        </form>
      ) : (
        <p className="text-teal-500">Thank you for signing up! You'll be notified when Challenge 2 is available.</p>
      )}
    </div>
  );
}

export default EmailCapture;
