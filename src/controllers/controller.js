const taskService = require("../services/todo");
// const joi = require("joi");
// const HTTPError = require("../utils/HTTPError");


const getTasks = async (req, res) => {
  console.log("/tasks controller is called");
  res.send(await taskService.getTasks());
};

const getTask = (req, res) => {
  console.log("/tasks/:id controller is called");
  res.send(taskService.getTask(req.params.id));
};

const postTask = async (req, res) => {
  // try {
  //   const schema = joi.object({
  //     title: joi.string().alphanum().min(1).max(1000).required()
  //   });
    
  //   const { error, value } = schema.validate(req.body);
  //   if (error) {
  //     throw new HTTPError(error.message, 400);
  //   }

  const task = await taskService.postTask(req.body.title);
  res.status(201).send(task);
  console.log("POST /tasks/ controller is called");
  // } catch (error) {
  //   if (error instanceof HTTPError) {
  //     res.status(error.code).json({ message: error.message });
  //   }
  // response.status(400).send(error.toString())
  //}
};

const completeTask = (req, res) => {
  console.log("PATCH /tasks/:id controller is called");
  res.send(taskService.completeTask(req.params.id));
};

const deleteTasks = (req, res) => {
  console.log("DELETE /tasks/ controller is called");
  res.send(taskService.deleteTasks(req.query.isComplete));
};

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks };