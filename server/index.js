const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3002;
const app = express();

app.use(bodyParser.json());

// Allow CORS
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});

app.get('/', (req, res) => {
  res.json({ where: 'world Robi22' });
});

app.get('/api', (req, res) => {
  res.json({ where: 'world get' });
});

app.post('/api', async (req, res) => {
  console.log('name', req.body);
  let name = req.body;
  res.json(name);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
