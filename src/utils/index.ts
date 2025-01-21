import { Todo } from "../types";

export const filterTodosByCategory = (todos: Todo[], category: string): Todo[] => {
    switch (category) {
      case "pending":
        return todos.filter((todo) => !todo.isCompleted);
      case "complete":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };
  