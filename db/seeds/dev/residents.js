
exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex('residents').del()
    .then(function () {
      // Inserts seed entries
    return knex('residents').insert([
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
    }
  ])
})
.catch (error) {
  console.log(`Error seeding data: ${error}`)
}
};
