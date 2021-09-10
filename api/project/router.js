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
  Projects.add();
});

module.exports = router;
