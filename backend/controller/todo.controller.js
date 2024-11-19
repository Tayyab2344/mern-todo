import Todo from "../models/todo.model.js";

export const createTodo = async (req, res, next) => {
  const { task } = req.body;

  if (!task || typeof task !== 'string' || task.trim() === '') {
    return res.status(400).json({ message: "Task must be a non-empty string" });
  }

  Todo.create({ task })
    .then(newTodo => {
      res.status(201).json({
        message: "Todo created successfully",
        todo: newTodo,
      });
    })
    .catch(next);
};

export const getTodos = (req, res, next) => {
  Todo.find()
    .then(todos => {
      res.status(200).json({
        message: "Todos retrieved successfully",
        todos,
      });
    })
    .catch(next);
};

export const deleteTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Todo deleted successfully" });
    })
    .catch(next);
};

export const markComplete = (req, res, next) => {
  const { id } = req.params;
  Todo.findByIdAndUpdate(id, { completed: true }, { new: true })
    .then(updatedTodo => {
      res.status(200).json({
        message: "Todo marked as complete",
        todo: updatedTodo,
      });
    })
    .catch(next);
};
