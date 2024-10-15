import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routerTasks from "./routes/task.js";

mongoose
  .connect(
    "mongodb+srv://ayetayadi01:mongodb**ayet01@cluster0.sch8x.mongodb.net/"
  )
  .then(function () {
    console.log("Connection réussie");
  })
  .catch(function (e) {
    console.log("Connection échouée: ", e);
  });

const app = express();

//middlewares

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     console.log("First")
//     next()
// })

// app.use ((req, res, next) => {
//     res.status(200).json({  message: "Hello!!" })
//     next()
// })

// app.use((req, res) => {
//     console.log("Second")
// })

/*const tasks = [
  { id: 1, name: "task1" },
  { id: 2, name: "task2" },
  { id: 3, name: "task3" },
];*/

app.use("/api/tasks", routerTasks);

export default app;
