import { FC } from "react";
import { ListToDointerface } from "../types";
import { EditTodo } from "./EditTodo";
import { LiComponent } from "./LiComponent";

export const ListOfToDo: FC<ListToDointerface> = ({
  todos,
  categoryTodo,
  lastAddedId,
  setLastAddedId,
  setTaskToEdit,
  taskToEdit,
  editTodoFinished,
  editDone,
  completeTodo,
  isEditingTodo,
  editTodo,
  deleteTodo,
}) => {
  return (
    <article className="flex flex-col justify-between w-2/4 h-96 border-2 border-slate-600">
      <ul className="font-semibold italic text-slate-300 cursor-pointer pb-8 overflow-auto scrollbar dark:scrollbar-thumb-blue-900 dark:scrollbar-track-gray-950">
        {todos.length < 1 && (
          <div className="flex justify-center items-center min-h-44">
            <h1 className="text-xl font-bold">Agrega una tarea.</h1>
          </div>
        )}
        {categoryTodo?.map((todo) => (
          <div
            key={todo.id}
            className={`transition-all ease-in-out duration-300 ${
              lastAddedId === todo.id ? "animate-pulse bg-black" : ""
            }`}
            onAnimationEnd={() => setLastAddedId(null)}
          >
            {todo.isEditing ? (
              <EditTodo
                setTaskToEdit={setTaskToEdit}
                taskToEdit={taskToEdit}
                editTodoFinished={editTodoFinished}
                editDone={editDone}
                todo={todo}
              />
            ) : (
              <LiComponent
                todo={todo}
                completeTodo={completeTodo}
                isEditingTodo={isEditingTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            )}
          </div>
        ))}
      </ul>
    </article>
  );
};
