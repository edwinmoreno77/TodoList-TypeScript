export interface Todo {
    content: string;
    id: number;
    isCompleted: boolean;
    isEditing: boolean;
  }

export interface LiCompInterface {
    completeTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number) => void;
    isEditingTodo: boolean;
    todo: Todo;
  }

export interface EditTodoInterface {
  editTodoFinished: (
    event: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) => void;
  editDone: (id: number) => void;
  taskToEdit: Todo;
  setTaskToEdit: (object: Todo) => void;
  todo: Todo;
  }

  export interface CategoryInterface {
    activeCategory: string;
    completeTodos: Todo[];
    pendingTodos: Todo[];
    todos: Todo[];
    todosToShow: (category: string) => void;
  }

  export interface ListToDointerface extends LiCompInterface, EditTodoInterface {
    categoryTodo: Todo[];
    lastAddedId: number;
    setLastAddedId: (id: number | null) => void;
    todos: Todo[];
  }
  