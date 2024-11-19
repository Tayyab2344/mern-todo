import express from "express";
import { createTodo, getTodos, deleteTodo, markComplete } from "../controller/todo.controller.js";

const Router = express.Router();

Router.get("/get", getTodos);
Router.post("/add", createTodo);
Router.delete("/delete/:id", deleteTodo);
Router.patch("/complete/:id", markComplete);

export default Router;
