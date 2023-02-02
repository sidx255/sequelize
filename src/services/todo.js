const { findIndexById } = require("../utils/indexUtil");
const db = require("../models");
let task = {};
const getTasks = async () => {
  const result = await db.task.findAll();
  return result;
};

const getTask = async (id) => {
  console.log("GET /tasks/:id service is called");
  const requestTaskId = findIndexById(id);
  const result = await db.Task.findAll({ where: { id: requestTaskId }});
  return result[0];
};

const postTask = async (name) => {
  console.log("POST /tasks/ service is called");
  task = {
    id: global.id,
    isComplete: false,
    title: name
  };
  global.id += 1;
  let result = await db.Task.create(task);
  return result;
  //res.send(result);
};

const completeTask = async (id) => {
  console.log("PATCH /tasks/:id service is called");
  const requestTaskId = findIndexById(id);
  global.db[requestTaskId].isComplete = true;
  return await global.db[requestTaskId];
};

const deleteTasks = async (isComplete) => {
  console.log("DELETE /tasks/ service is called");
  const initialLength = global.db.length;
  isComplete === true ? global.db.splice(0, global.db.length, ...global.db.filter((task) => 
    task.isComplete == true)) : global.db.splice(0, global.db.length);
  return `Deleted ${initialLength - global.db.length} element(s)`;
};

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks };
