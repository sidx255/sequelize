const express = require("express");
const { getTasks, getTask, postTask, completeTask, deleteTasks } = require("../controllers/controller");
const taskRouter = express.Router();

taskRouter.get("/", getTasks);

taskRouter.get("/:id", getTask);

taskRouter.post("/", postTask);

taskRouter.patch("/:id", completeTask);

taskRouter.delete("/", deleteTasks);
// Create a new user

module.exports = taskRouter;