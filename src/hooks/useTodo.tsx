import { useState } from "react";

export interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  isEditing: boolean;
}

const modelTodo = {
  id: 1,
  content: "",
  isCompleted: false,
  isEditing: false,
};

export const useTodo = () => {
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<Todo>(modelTodo);
  const [todo, setTodo] = useState<Todo>(modelTodo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const completeTodos = todos.filter((todo) => todo.isCompleted === true);
  const pendingTodos = todos.filter((todo) => todo.isCompleted === false);
  const [lastAddedId, setLastAddedId] = useState<number | null>(null);

  const sendTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todo.content.trim() !== "") {
      setTodos([...todos, todo]);
      setLastAddedId(todo.id);
      setTodo({
        ...modelTodo,
        id: todo.id + 1,
      });
    }
  };

  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id: number) => {
    const completeTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });
    setTodos(completeTodos);
  };

  const editTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          setTaskToEdit(todo);
          setIsEditingTodo(true);
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      })
    );
  };

  const editTodoFinished = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (key === "Enter") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id === id) {
            setTaskToEdit(todo);
            return {
              ...todo,
              content: taskToEdit.content,
              isEditing: false,
            };
          }
          return todo;
        })
      );
      setIsEditingTodo(false);
      setTaskToEdit(modelTodo);
    }
  };

  const editDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          setTaskToEdit(todo);
          return {
            ...todo,
            content: taskToEdit.content,
            isEditing: false,
          };
        }
        return todo;
      })
    );
    setIsEditingTodo(false);
    setTaskToEdit(modelTodo);
  };
  return {
    todos,
    todo,
    taskToEdit,
    lastAddedId,
    setLastAddedId,
    setTodo,
    setTaskToEdit,
    completeTodo,
    completeTodos,
    pendingTodos,
    deleteTodo,
    editTodo,
    editTodoFinished,
    isEditingTodo,
    sendTodo,
    editDone,
  };
};
