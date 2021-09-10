const projects = [
  {
    project_name: "Finishing the sprint challenge",
    project_description: "vscode yo",
    project_completed: 0,
  },
  {
    project_name: "Studying for the technical interview",
    project_description: "docs docs docs",
    project_completed: 0,
  },
  {
    project_name: "lunch",
    project_description: "making a sandwich",
    project_completed: 0,
  },
];

exports.projects = projects;

exports.seed = function (knex) {
  return knex("projects").insert(projects);
};
