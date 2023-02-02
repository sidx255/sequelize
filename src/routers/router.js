const express = require("express");
const { getTasks, getTask, postTask, completeTask, deleteTasks } = require("../controllers/controller");
const {validateCreateTask,validatePatchTask}=require("../middlewares/joiMiddleware");
const taskRouter = express.Router();

taskRouter.get("/", getTasks);

taskRouter.get("/:id", getTask);

taskRouter.post("/", validateCreateTask, postTask);

taskRouter.patch("/:id", validatePatchTask, completeTask);

taskRouter.delete("/", deleteTasks);

module.exports = taskRouter;