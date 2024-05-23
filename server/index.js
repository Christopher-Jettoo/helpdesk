const express = require('express');
const cors = require('cors');
const app = express();
// const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let tickets = [];
let idCounter = 1;



app.get('/', (req, res) => {
  res.send('Server is running');
});


// app.post('/tickets', (req, res) => {
//   const ticket = { id: idCounter++, status: 'new', ...req.body };
//   tickets.push(ticket);
//   console.log(`Would normally send email here with body: ${JSON.stringify(ticket)}`);
//   res.status(201).json(ticket);
// });

// app.get('/tickets', (req, res) => {
//   res.json(tickets);
// });

// app.get('/tickets/:id', (req, res) => {
//   const ticket = tickets.find(t => t.id === parseInt(req.params.id));
//   if (!ticket) return res.status(404).send('Ticket not found');
//   res.json(ticket);
// });

// app.put('/tickets/:id', (req, res) => {
//   const ticket = tickets.find(t => t.id === parseInt(req.params.id));
//   if (!ticket) return res.status(404).send('Ticket not found');
//   ticket.status = req.body.status || ticket.status;
//   ticket.response = req.body.response || ticket.response;
//   res.json(ticket);
// });

// app.listen(port, () => {
//   console.log(`Express server listening on port ${port}`);
// });

const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
