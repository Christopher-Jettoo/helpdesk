import React, { useState } from 'react';

export default function SubmitForm() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://helpdesk-nine-bice.vercel.app/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    setFormData({ name: '', email: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
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
