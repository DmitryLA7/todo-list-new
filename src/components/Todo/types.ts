export enum TodoStatus {
    DONE = 'done',
    NOT_DONE = 'not_done'
}

export type TodoType = { id: number; description: string; status: TodoStatus; }

export type TodoProps = TodoType