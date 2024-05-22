import React, { useEffect, useState } from 'react';

export default function Admin() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [userResponse, setUserResponse] = useState(''); 

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('http://localhost:4000/tickets');
      const data = await response.json();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    setUserResponse(ticket.response || ''); 
  };

  const handleUpdateTicket = async () => {
    const updatedTicketData = { status: selectedTicket.status, response: userResponse }; 

    const response = await fetch(`http://localhost:4000/tickets/${selectedTicket.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTicketData)
    });

    const data = await response.json();
    setTickets(tickets.map(t => (t.id === data.id ? data : t)));
    setSelectedTicket(null);
  };
  

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id} onClick={() => handleSelectTicket(ticket)}>
            {ticket.name} - {ticket.status}
          </li>
        ))}
      </ul>
      {selectedTicket && (
        <div>
          <h2>Ticket Detail</h2>
          <p>{selectedTicket.description}</p>
          <label>
            Status:
            <select
              value={selectedTicket.status}
              onChange={(e) => setSelectedTicket({ ...selectedTicket, status: e.target.value })}
            >
              <option value="new">New</option>
              <option value="in progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </label>
          <label>
            Response:
            <textarea value={userResponse} onChange={(e) => setUserResponse(e.target.value)} /> 
          </label>
          <button onClick={handleUpdateTicket}>Update Ticket</button>
        </div>
      )}
    </div>
  );
}
