const resources = [
  {
    resource_name: "stack overflow",
    resource_description: "I hope you enjoy reading",
  },
  { resource_name: "old lambda courses", resource_description: "review" },
  {
    resource_name: "friends",
    resource_description: "it takes a village",
  },
];

exports.resources = resources;

exports.seed = function (knex) {
  return knex("resources").insert(resources);
};
