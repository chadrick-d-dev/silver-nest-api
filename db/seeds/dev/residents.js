
exports.seed = function(knex) {

  return knex('residents3').del()
    .then(function () {
      return knex('residents3').insert([
      { 
        name: "Doris",
        photo: "https://erinwritesnow.files.wordpress.com/2017/01/cute-happy-older-lady.jpg",
        age: "87",
        height: "5'9\"",
        weight: "145 lbs",
        pcp: "Dr. Uppitomison",
        ambulatory: "yes",
        help_with_medications: "yes",
        other_impairments: "visual impairment",
        previous_career: "Seamstress",
        interests: "knitting, cats, card games, unsolved mysteries",
        pets: "one cat",
        living_preferences: "",
        semester: "Spring 2021",
        additional_notes: "I need help feeding my cat, Mittens. Please don't eat peanuts around me, I am terribly allergic."
      }
    ])
  })
};