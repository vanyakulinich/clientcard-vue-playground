const server = require('express')();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const clients = require('./clients.json');

server.use(cors());

server.get('/api/clients', (req, res) => {
  res.send(clients);
});

server.listen(PORT, () => console.log(`server is listening on ${PORT} port`));