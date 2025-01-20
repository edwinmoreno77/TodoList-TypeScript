import { FC } from "react";
import { Todo } from "../hooks/useTodo";

interface Props {
  setTaskToEdit: (object: Todo) => void;
  taskToEdit: Todo;
  editTodoFinished: (
    event: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => void;
  editDone: (id: number) => void;
  todo: Todo;
}

export const EditTodo: FC<Props> = ({
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
        className="w-full px-3 text-lime-600"
        type="text"
      />
      <span onClick={() => editDone(todo.id)} className="text-lime-500 text-xs">
        Done
      </span>
    </div>
  );
};
