const tasks = [
  {
    task_description: "coding longer",
    task_notes: "oh my god, my eyes are bleeding",
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: "weeping gently on to my keyboard",
    task_notes: "my H key no longer works",
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: "going for a walk",
    task_notes: "sometimes the answer is taking a break",
    task_completed: 0,
    project_id: 2,
  },
];

exports.tasks = tasks;

exports.seed = function (knex) {
  return knex("tasks").insert(tasks);
};
