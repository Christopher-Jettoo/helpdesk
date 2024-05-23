import React, { useState } from 'react';

export default function SubmitForm() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://helpdesk-client-gilt.vercel.app/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setFormData({ name: '', email: '', description: '' });
    } catch (error) {
      setError(error.message);
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <label>
        Name: <input name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email: <input name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Description of Problem:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
