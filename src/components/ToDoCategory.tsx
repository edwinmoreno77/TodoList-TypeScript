import { FC } from "react";
import { CategoryInterface } from "../types";

export const ToDoCategory: FC<CategoryInterface> = ({
  activeCategory,
  completeTodos,
  pendingTodos,
  todos,
  todosToShow,
}) => {
  return (
    <section className="flex justify-between px-5 py-2 font-extralight italic text-tiny sm:text-sm w-2/4 bg-slate-900 rounded-b-xl border-2 border-slate-700">
      <button
        type="button"
        onClick={() => todosToShow("todos")}
        className={`${
          activeCategory === "todos" ? "text-lime-500 font-bold" : "text-white"
        } cursor-pointer hover:brightness-150 hover:scale-110 transition-all ease-in-out duration-200`}
      >
        Todas: {todos.length}
      </button>
      <button
        type="button"
        onClick={() => todosToShow("complete")}
        className={`${
          activeCategory === "complete"
            ? "text-lime-500 font-bold"
            : "text-white"
        } cursor-pointer hover:brightness-150 hover:scale-110 transition-all ease-in-out duration-200`}
      >
        Completadas: {completeTodos.length}
      </button>
      <button
        type="button"
        onClick={() => todosToShow("pending")}
        className={`${
          activeCategory === "pending" ? "text-red-500 font-bold" : "text-white"
        } cursor-pointer hover:brightness-150 hover:scale-110 transition-all ease-in-out duration-200`}
      >
        Pendientes: {pendingTodos.length}
      </button>
    </section>
  );
};
