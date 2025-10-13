import './style.css'
import { App } from '../05-todo-app/src/todos/app.js';
import todoStore from '../05-todo-app/src/store/todo.store.js';

todoStore.initStore();

App('#app');
