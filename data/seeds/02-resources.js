const resources = [
  {
    resource_name: "stackoverflow",
    resource_description:
      "one of the only reasons the internet isnt a complete barren wasteland",
  },
  { resource_name: "lambda courses", resource_description: "review materials" },
  {
    resource_name: "friends",
    resource_description: "sometimes, it takes a village",
  },
];

exports.resources = resources;

exports.seed = function (knex) {
  return knex("resources").insert(resources);
};
