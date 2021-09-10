// build your `Task` model here
const db = require("../../data/dbConfig");

async function find() {
  const tasksResults = await db("tasks as t").leftJoin(
    "projects as p",
    "t.project_id",
    "p.project_id"
  );
  // .select("*.t");

  const tasksInfo = tasksResults.map((e) => {
    return {
      task_id: e.task_id,
      task_notes: e.task_notes,
      task_description: e.task_description,
      task_completed: e.task_completed === 1 ? true : false,
      project_name: e.project_name,
      project_description: e.project_description,
    };
  });

  return tasksInfo;
}

async function add(tasks) {
  const [id] = await db("tasks").insert(tasks);
  const newTasks = {
    task_id: id,
    task_notes: tasks.task_notes,
    task_description: tasks.task_description,
    task_completed: tasks.task_completed === 1 ? true : false,
  };
  return newTasks.where("task_id", id).first();
}

module.exports = { find, add };
