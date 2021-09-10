// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.find()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const projects = req.body;

  Projects.add(projects)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;
