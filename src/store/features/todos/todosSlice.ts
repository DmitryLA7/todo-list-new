import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { type RootState } from '@/store'
import { TodoStatus, type TodoType } from '@/types/todo'

export type TodosState = TodoType[]

const initialState: TodosState = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action: PayloadAction<Pick<TodoType, 'description'>>) {
            state.push({
                id: nanoid(5),
                description: action.payload.description,
                status: TodoStatus.NOT_DONE,
            })
        },
        toggleStatus(state, action: PayloadAction<TodoType['id']>) {
            const todo = state.find((v) => findTodo(v)(action.payload))

            if (todo)
                todo.status = todo.status === TodoStatus.DONE ? TodoStatus.NOT_DONE : TodoStatus.DONE
        },
        todoDeleted(state, action: PayloadAction<TodoType['id']>) {
            return state.filter(({ id }) => id !== action.payload)
        },
        toggleDescription(state, action: PayloadAction<Pick<TodoType, 'id' | 'description'>>) {
            const todo = state.find((v) => findTodo(v)(action.payload.id))

            if (todo)
                todo.description = action.payload.description
        },
        setTodosList(state, action: PayloadAction<TodoType[]>) {
            return state = action.payload
        }
    },
})

const findTodo = (todo: TodoType) => (id: TodoType['id']) => todo.id === id

export const selectTodos = (state: RootState) => state.todos

export const { todoAdded, toggleStatus, todoDeleted, toggleDescription, setTodosList } = todosSlice.actions
export default todosSlice.reducer