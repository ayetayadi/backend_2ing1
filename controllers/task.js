import Task from "../models/Task.js";

export const fetchTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ model: tasks, message: "success" });
};

export const getTaskById = async (req, res) => {
  console.log(req.params.id);
  const task = await Task.findOne({ _id: req.params.id });
  res.status(200).json({ model: task, message: "success" });
};

export const addTask = async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  await task.save();
  res.status(201).json({ message: "Object created!!" });
};

export const updateTask = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(201).json({ model: task, message: "Object patched!!" });
};

export const deleteTask = async (req, res) => {
  console.log(req.params.id);
  await Task.deleteOne({ _id: req.params.id });
  res.status(201).json({ message: "Object deleted!!" });
};
