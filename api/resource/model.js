// build your `Resource` model here
const db = require("../../data/dbConfig");

async function find() {
  const resourceResults = await db("resources as r").select("r.*");

  return resourceResults;
}

module.exports = { find };
