import { CategoryComponent } from "./components/CategoryComponent";
import { EditTodo } from "./components/EditTodo";
import { LiComponent } from "./components/LiComponent";
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
    addTodo,
    editDone,
    setLastAddedId,
    todosToShow,
  } = useTodo();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white pt-10 h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#00047d_85%)]"></div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif mb-12 p-5">
          Lista de Tareas
        </h1>
        <input
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
          onKeyDown={(e) => addTodo(e)}
          value={todo.content}
          placeholder="¿Algo que hacer?"
          className="w-2/4 rounded-t-lg text-black p-2"
          type="text"
        />
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
        <CategoryComponent
          todosToShow={todosToShow}
          activeCategory={activeCategory}
          todos={todos}
          completeTodos={completeTodos}
          pendingTodos={pendingTodos}
        />
      </div>
    </>
  );
}

export default App;
