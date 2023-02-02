const express = require("express");
const taskRouter = require("./routers/router");

const app = express();

const PORT = 3000;
global.db = [];
global.id = 0;

app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Application Started in PORT: ${PORT}`);   
});
