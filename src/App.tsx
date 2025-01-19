import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todos,
    todo,
    taskToEdit,
    isEditingTodo,
    pendingTodos,
    completeTodos,
    lastAddedId,
    categoryTodo,
    activeCategory,

    setTodo,
    setTaskToEdit,
    completeTodo,
    deleteTodo,
    editTodo,
    editTodoFinished,
    sendTodo,
    editDone,
    setLastAddedId,
    todosToShow,
  } = useTodo();

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-950 text-white pt-10 h-screen">
        <h1 className="text-3xl md:text-5xl font-bold underline mb-20 p-5">
          Lista de Tareas
        </h1>
        <input
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
          onKeyDown={(e) => sendTodo(e)}
          value={todo.content}
          placeholder="¿Algo que hacer?"
          className="w-2/4 rounded-t-xl text-black p-2"
          type="text"
        />
        <article className="flex flex-col justify-between bg-slate-800 w-2/4 h-72 rounded-b-xl mb-10 border-2 border-slate-600">
          <ul className="font-semibold italic text-slate-300 cursor-pointer pb-8 overflow-auto">
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
                    <span
                      onClick={() => editDone(todo.id)}
                      className="text-lime-500 text-xs"
                    >
                      Done
                    </span>
                  </div>
                ) : (
                  <li
                    className="flex px-1 text-xxs md:text-xs py-0 justify-between items-center group hover:bg-black"
                    key={todo.id}
                  >
                    <div
                      onClick={() => completeTodo(todo.id)}
                      className="flex items-center"
                    >
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
                )}
              </div>
            ))}
          </ul>
          <section className="flex justify-between px-5 py-2 font-extralight italic text-tiny sm:text-sm w-full bg-slate-900 rounded-b-xl">
            <span
              onClick={() => todosToShow("todos")}
              className={`${
                activeCategory === "todos"
                  ? "text-lime-500 font-bold"
                  : "text-white"
              } cursor-pointer hover:brightness-150 hover:scale-110 transition-all ease-in-out duration-200`}
            >
              Todas: {todos.length}
            </span>
            <span
              onClick={() => todosToShow("complete")}
              className={`${
                activeCategory === "complete"
                  ? "text-lime-500 font-bold"
                  : "text-white"
              } cursor-pointer hover:brightness-150 hover:scale-110 transition-all ease-in-out duration-200`}
            >
              Completadas: {completeTodos.length}
            </span>
            <span
              onClick={() => todosToShow("pending")}
              className={`${
                activeCategory === "pending"
                  ? "text-red-500 font-bold"
                  : "text-white"
              } cursor-pointer hover:brightness-150 hover:scale-110 transition-all ease-in-out duration-200`}
            >
              Pendientes: {pendingTodos.length}
            </span>
          </section>
        </article>
      </div>
    </>
  );
}

export default App;
