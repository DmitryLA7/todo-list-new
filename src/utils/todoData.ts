import { TodoType } from "@/types/todo"
import localStorageData from "./localStorage"
import LocalStorageCodes from "@/enums/localStorageCodes"
import JsonData from "./jsonData"
import isTodo from "@/guards/isTodo"

const TodoListData = {
    writeToStorage(todoList: TodoType[]) {
        const preparedList = JsonData.stringifyItem(todoList)

        if (preparedList) {
            localStorageData.setItem([LocalStorageCodes.STORAGED_TODO_LIST, preparedList])
        } else {
            console.error('Не удалось записать список дел в хранилище')
        }
    },
    getFromStorage() {
        const storaged = localStorageData.getItem(LocalStorageCodes.STORAGED_TODO_LIST)
        let result: TodoType[] | null = null

        if (storaged) {
            const parsed = JsonData.parseItem(storaged)

            result = Array.isArray(parsed) ? parsed.filter(isTodo) : null
        } else {
            console.error('Не удалось получить список дел из хранилища')
        }

        return result
    }
}

export default TodoListData