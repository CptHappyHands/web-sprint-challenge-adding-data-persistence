const projects = [
  {
    project_name: "Finishing this sprint",
    project_description: "spending hours on vscode",
    project_completed: 0,
  },
  {
    project_name: "Studying for the technical interview",
    project_description: "spending hours reading documentation",
    project_completed: 0,
  },
  {
    project_name: "making myself lunch",
    project_description: "making a sandwich",
    project_completed: 0,
  },
];

exports.projects = projects;

exports.seed = function (knex) {
  return knex("projects").insert(projects);
};
