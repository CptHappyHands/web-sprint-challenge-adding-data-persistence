// build your `Task` model here
const db = require("../../data/dbConfig");

async function find() {
  const tasksResults = await db("tasks");

  const tasksInfo = tasksResults.map((e) => {
    return {
      tasks_id: e.tasks_id,
      tasks_notes: e.tasks_notes,
      tasks_description: e.tasks_description,
      tasks_completed: e.tasks_completed === 1 ? true : false,
    };
  });

  return tasksInfo;
}

async function add(tasks) {
  const [id] = await db("tasks").insert(tasks);
  const newTasks = {
    tasks_id: id,
    tasks_notes: tasks.tasks_notes,
    tasks_description: tasks.tasks_description,
    tasks_completed: tasks.tasks_completed === 1 ? true : false,
  };
  return newTasks;
}

module.exports = { find, add };
