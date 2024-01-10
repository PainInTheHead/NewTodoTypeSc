import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();

    return data;
  }
);

interface Todo {
    id: string,
    title: string,
    done: boolean,
    isEdit: boolean,
}

interface TodosState {
    todos: Todo[]
    filter: string
    status: null | string
    error: null | string
}

const initialState: TodosState = {
  todos: [],
  filter: "all",
  status: null,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    putTodo(state, action: PayloadAction<string>) {
      if (!action.payload) {
        alert("nice try, budy");
      } else {
        state.todos.push({
          id: new Date().toISOString(),
          title: action.payload,
          done: false,
          isEdit: false,
        });
      }
    },

    toggleTodo(state, action: PayloadAction<string>) {
      const toggledtodo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (toggledtodo) {
        toggledtodo.done = !toggledtodo.done;
      }
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    allSelected(state) {
      const alltoggle = state.todos.every((todo) => todo.done);
      if (alltoggle) {
        state.todos = state.todos.map((todo) => {
          return {...todo, done: !todo.done}
        })
      } else {
        state.todos = state.todos.map((todo) => {
          return {...todo, done: true}
        })
      }
    },

editTitleTodo(state, action: PayloadAction<{id: string, title: string}>) {
      const editTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (editTodo) {
          editTodo.title = action.payload.title;
      }
    },

    editorTodo(state, action: PayloadAction<string>) {
      const editTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (editTodo) {
          editTodo.isEdit = !editTodo.isEdit;
      }
    },

    clearHolder(state) {
      state.todos = [];
    },

    clearComleted(state) {
      state.todos = state.todos.filter((todo) => !todo.done);
    },

    openFiltered(state, action) {
      state.filter = action.payload;
    },
  },

    extraReducers: (builder) => {
      builder.addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });

      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = action.payload;
      });
    },
});

export const {
  putTodo,
  toggleTodo,
  deleteTodo,
  allSelected,
  clearHolder,
  clearComleted,
  editTitleTodo,
  editorTodo,
  openFiltered,
} = todoSlice.actions;

export default todoSlice.reducer;
