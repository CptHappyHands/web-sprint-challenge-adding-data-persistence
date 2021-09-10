// build your `Project` model here
const db = require("../../data/dbConfig");

async function find() {
  // return await db("projects");
  const projectResults = await db("projects");

  const projectInfo = projectResults.map((e) => {
    return {
      project_id: e.project_id,
      project_name: e.project_name,
      project_description: e.project_description,
      project_completed: e.project_completed === 1 ? true : false,
    };
  });

  return projectInfo;
}

async function add(project) {
  const [id] = await db("projects").insert(project);
  const newProject = {
    project_id: id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed === 1 ? true : false,
  };
  return newProject;
  // return db("projects")
  //   .insert(project)
  //   .then(([project_id]) => {
  //     return db("projects").where("project_id", project_id).first();
  //   });
  // const newProject = {
  //   project_id: id,
  //   project_name
  // }
}
module.exports = { find, add };
