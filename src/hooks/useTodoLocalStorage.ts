import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { setTodosList } from "@/store/features/todos/todosSlice";

import TodoListData from "@/utils/todoData";

const useTodoLocalStorageSession = () => {
    const todoList = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const storagedTodos = TodoListData.getFromStorage()

        if (storagedTodos) dispatch(setTodosList(storagedTodos))
    }, [])

    useEffect(() => {
        document.addEventListener('visibilitychange', visChange)

        return () => {
            document.addEventListener('visibilitychange', visChange)
        }
    }, [todoList])

    const visChange = () => {
        if (document.visibilityState === 'hidden') {
            TodoListData.writeToStorage(todoList)
        }
    }
}

export default useTodoLocalStorageSession