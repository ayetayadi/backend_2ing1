import Task from "../models/Task.js";
import express from "express";
import {
  fetchTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
} from "../controllers/task.js";

const router = express.Router();

//ENPOINTS -- ROUTES

router.get("/", fetchTasks);

router.get("/:id", getTaskById);

router.post("/", addTask);

router.patch("/:id", updateTask);

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(201).json({ message: "Object updated!!" });
});

router.delete("/:id", deleteTask);

export default router;
