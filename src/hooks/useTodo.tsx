import { useEffect, useState } from "react";
import { Todo } from "../types";
import { modelTodo } from "../utils/constants";

export const useTodo = () => {
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);
  const [lastAddedId, setLastAddedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [taskToEdit, setTaskToEdit] = useState<Todo>(modelTodo);
  const [todo, setTodo] = useState<Todo>(modelTodo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const [categoryTodo, setCategoryTodo] = useState<Todo[]>(todos);
  const completeTodos = todos.filter((todo) => todo.isCompleted === true);
  const pendingTodos = todos.filter((todo) => todo.isCompleted === false);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
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
      if (taskToEdit.content.trim() === "") return;
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? { ...todo, content: taskToEdit.content, isEditing: false }
            : todo
        )
      );
      setIsEditingTodo(false);
      setTaskToEdit(modelTodo);
    }
  };

  const editDone = (id: number) => {
    if (taskToEdit.content.trim() === "") return;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, content: taskToEdit.content, isEditing: false }
          : todo
      )
    );
    setIsEditingTodo(false);
    setTaskToEdit(modelTodo);
  };

  const todosToShow = (category: string) => {
    setActiveCategory(category);
    switch (category) {
      case "pending":
        setCategoryTodo(pendingTodos);
        break;
      case "complete":
        setCategoryTodo(completeTodos);
        break;
      case "todos":
        setCategoryTodo(todos);
        break;
    }
  };

  useEffect(() => {
    switch (activeCategory) {
      case "pending":
        setCategoryTodo(pendingTodos);
        break;
      case "complete":
        setCategoryTodo(completeTodos);
        break;
      case "todos":
      default:
        setCategoryTodo(todos);
        break;
    }
    if (lastAddedId != null) {
      setTimeout(() => {
        setLastAddedId(null);
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, setLastAddedId]);

  return {
    todos,
    todo,
    taskToEdit,
    lastAddedId,
    completeTodos,
    pendingTodos,
    isEditingTodo,
    categoryTodo,
    activeCategory,
    setLastAddedId,
    setTodo,
    setTaskToEdit,
    completeTodo,
    deleteTodo,
    editTodo,
    editTodoFinished,
    addTodo,
    editDone,
    todosToShow,
  };
};
