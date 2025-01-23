import { ListOfToDo } from "./components/ListToDo";
import { ToDoCategory } from "./components/ToDoCategory";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    activeCategory,
    addTodo,
    categoryTodo,
    completeTodo,
    completeTodos,
    deleteTodo,
    editDone,
    editTodo,
    editTodoFinished,
    isEditingTodo,
    lastAddedId,
    pendingTodos,
    setLastAddedId,
    setTaskToEdit,
    setTodo,
    taskToEdit,
    todo,
    todos,
    todosToShow,
  } = useTodo();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#00047d_85%)]"></div>
        <h1 className="text-3xl tracking-tighter md:text-5xl font-bold font-serif mb-12">
          Lista de tareas
        </h1>
        <input
          onChange={(e) => setTodo({ ...todo, content: e.target.value })}
          onKeyDown={(e) => addTodo(e)}
          value={todo.content}
          placeholder="¿Que deseas hacer?"
          className="w-2/4 rounded-t-lg italic font-semibold tracking-wide text-slate-500 p-2 placeholder:tracking-[.10em] placeholder-slate-400 placeholder:italic placeholder:font-semibold placeholder:text-lg"
          type="text"
        />
        <ListOfToDo
          categoryTodo={categoryTodo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editDone={editDone}
          editTodo={editTodo}
          editTodoFinished={editTodoFinished}
          isEditingTodo={isEditingTodo}
          lastAddedId={lastAddedId ?? 0}
          setLastAddedId={setLastAddedId}
          setTaskToEdit={setTaskToEdit}
          taskToEdit={taskToEdit}
          todo={todo}
          todos={todos}
        />
        <ToDoCategory
          activeCategory={activeCategory}
          completeTodos={completeTodos}
          pendingTodos={pendingTodos}
          todos={todos}
          todosToShow={todosToShow}
        />
      </div>
    </>
  );
}

export default App;
