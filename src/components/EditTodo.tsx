import { FC } from "react";
import { EditTodoInterface } from "../types";

export const EditTodo: FC<EditTodoInterface> = ({
  setTaskToEdit,
  taskToEdit,
  editTodoFinished,
  editDone,
  todo,
}) => {
  return (
    <div className="flex items-center bg-white pe-2">
      <input
        onChange={(e) =>
          setTaskToEdit({
            ...taskToEdit,
            content: e.target.value,
          })
        }
        onKeyDown={(e) => editTodoFinished(e, todo.id)}
        value={taskToEdit.content}
        className="w-full py-1 border-y-2 px-3 italic text-lime-600"
        type="text"
      />
      <span
        onClick={() => editDone(todo.id)}
        className="hover: hover:brightness-150 text-xs"
      >
        ✅
      </span>
    </div>
  );
};
