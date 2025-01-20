import { FC } from "react";
import { Todo } from "../hooks/useTodo";

interface Props {
  todo: Todo;
  completeTodo: (id: number) => void;
  isEditingTodo: boolean;
  editTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const LiComponent: FC<Props> = ({
  todo,
  completeTodo,
  isEditingTodo,
  editTodo,
  deleteTodo,
}) => {
  return (
    <li
      className="flex px-1 text-xxs md:text-xs py-0 justify-between items-center group hover:bg-black"
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
