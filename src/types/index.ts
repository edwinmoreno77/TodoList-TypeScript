export interface Todo {
    id: number;
    content: string;
    isCompleted: boolean;
    isEditing: boolean;
  }

export interface LiCompInterface {
    todo: Todo;
    completeTodo: (id: number) => void;
    isEditingTodo: boolean;
    editTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }

export interface EditTodoInterface {
    setTaskToEdit: (object: Todo) => void;
    taskToEdit: Todo;
    editTodoFinished: (
      event: React.KeyboardEvent<HTMLInputElement>,
      id: number
    ) => void;
    editDone: (id: number) => void;
    todo: Todo;
  }

  export interface CategoryInterface {
    todosToShow: (category: string) => void;
    completeTodos: Todo[];
    pendingTodos: Todo[];
    activeCategory: string;
    todos: Todo[];
  }