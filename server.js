const { response } = require('express');
const express = require('express');
// const cors = require('cors');
const app = express();
// app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Silver Nest';

app.get('/', (request, response) => {
  response.send('Oh hey silver nest');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.locals.residents = [
  {
    "id": "1",
    "name": "Doris",
    "photo": "",
    "age": "87",
    "height": "5'9\"",
    "weight": "145 lbs",
    "pcp": "Dr. Uppitomison",
    "ambulatory": "yes",
    "help with medications": "yes",
    "other impairments": "visual impairment",
    "previous career": "Seamstress",
    "interests": "knitting, cats, card games, unsolved mysteries",
    "pets": "one cat",
    "living preferences": "",
    "appointments": [{"day": "Monday", "time": "1:00AM"}, {"day": "Thursday", "time": "9:00AM"}],
    "semester": "Spring 2021",
    "additonal notes": "I need help feeding my cat, Mittens. Please don't eat peanuts around me, I am terribly allergic."
  },
  {
    "id": "",
    "name": "",
    "photo": "",
    "age": "",
    "weight": "",
    "height": "",
    "pcp": "",
    "ambulatory": "",
    "help with medications": "",
    "other impairments": "",
    "previous career": "",
    "interests": "",
    "pets": "",
    "living preferences": "",
    "appointments": [{"day": "", "time": ""}, {"day": "", "time": ""}],
    "semester": "",
    "additonal notes": ""
  },
];

app.get('/silver-nest-api/residents', (request, response) => {
  const allResidents = app.locals.residents;

  response.json({ allResidents });
});