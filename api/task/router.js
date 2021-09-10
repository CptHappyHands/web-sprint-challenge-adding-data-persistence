// build your `/api/tasks` router here
const express = require("express");
const Tasks = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.find()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const tasks = req.body;

  Tasks.add(tasks)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
