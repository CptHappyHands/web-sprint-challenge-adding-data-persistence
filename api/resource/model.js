// build your `Resource` model here
const db = require("../../data/dbConfig");

async function find() {
  return await db("resources");
}

async function add(resource) {
  const [id] = await db("resources").insert(resource);
  const newResource = {
    resource_id: id,
    resource_name: resource.resource_name,
    resource_description: resource.resource_description,
  };
  return newResource;
}

module.exports = { find, add };
