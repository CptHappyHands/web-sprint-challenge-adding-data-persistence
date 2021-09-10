// build your `Project` model here
const db = require("../../data/dbConfig");

async function find() {
  const projectResults = await db("projects as p");

  const projectInfo = projectResults.map((e) => {
    return {
      project_id: e.project_id,
      project_name: e.project_name,
      project_description: e.project_description,
      project_completed: e.project_completed,
    };
  });

  return projectInfo;
}

function add(project) {
  return db("projects")
    .insert(project)
    .then(([project_id]) => {
      return db("projects").where("project_id", project_id).first();
    });
  // const newProject = {
  //   project_id: id,
  //   project_name
  // }
}
module.exports = { find, add };
