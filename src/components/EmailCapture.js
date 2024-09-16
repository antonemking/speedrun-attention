import React, { useState } from 'react';

function EmailCapture() {
  const [email, setEmail] = useState('');

  return (
    <form
      name="email-capture"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
    >
      {/* Netlify hidden input fields */}
      <input type="hidden" name="form-name" value="email-capture" />
      <input type="hidden" name="bot-field" />

      {/* Form title */}
      <h2 className="text-2xl font-bold mb-4">Request Challenge 2</h2>

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
  );
}

export default EmailCapture;
