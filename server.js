const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')({client: 'pg'});

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Silver Nest';

// app.get('/', (request, response) => {
//   response.send('Oh hey silver nest');
// });

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/residents', async (request, response) => {
  try {
    const residents = await database('residents3').select();
    response.status(200).json(residents);
  } catch(error) {
    response.status(500).json({ error });
  }
});
// app.get('/silver-nest-api/residents', (request, response) => {
//   const allResidents = app.locals.residents;

//   response.json({ allResidents });
// });