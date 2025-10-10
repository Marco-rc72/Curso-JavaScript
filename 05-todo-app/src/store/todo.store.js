import { Todo } from "../todos/models/todo.model"

const Filters = {
    All: 'all',
    Complered: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Pieddra del alma'),
        new Todo('Pieddra del infinito'),
        new Todo('Pieddra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore🥑');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented');
}
/**
 * 
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}
/**
 * 
 * @param {String} todoId todo para eliminar store
 */
const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
}

/**
 * 
 */
const deleteCompleted = () => {
    throw new Error('Not implemented');
}


const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
}

export default {
    initStore,
}