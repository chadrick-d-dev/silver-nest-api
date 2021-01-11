const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.set('port', process.env.PORT || 3001);

app.locals.title = 'Silver Nest';

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

app.get('/api/v1/residents/:semester', async (request, response) => {
  try {
    const residents = await database('residents3').where('semester', request.params.semester).select();
    if (residents.length) {
      response.status(200).json(residents);
    } else {
      response.status(404).json({
        error: `Could not find residents available during the semester of ${request.params.semester}`
      });
    }
  } catch (error) {
    response.status(500).json({ error });
  }
});
