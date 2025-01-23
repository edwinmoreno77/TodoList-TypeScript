import { FC } from "react";
import { LiCompInterface } from "../types";

export const LiComponent: FC<LiCompInterface> = ({
  completeTodo,
  deleteTodo,
  editTodo,
  isEditingTodo,
  todo,
}) => {
  return (
    <li
      className="flex px-1 text-xxs md:text-sm py-1 justify-between items-center group hover:bg-blue-900 border-2 border-blue-950"
      key={todo.id}
    >
      <div onClick={() => completeTodo(todo.id)} className="flex items-center">
        {todo.isCompleted ? <span>☑️</span> : <span>⬛</span>}
        <p className="p-1">{todo.content}</p>
      </div>
      <div className="cursor-pointer hidden group-hover:block">
        <button
          disabled={isEditingTodo}
          onClick={() => editTodo(todo.id)}
          className={`${
            isEditingTodo ? "hidden" : "block"
          }p-1 brightness-90 hover:brightness-110 text-lime-500`}
        >
          📝
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-1 brightness-75 hover:brightness-125 text-red-600"
        >
          ❌
        </button>
      </div>
    </li>
  );
};
