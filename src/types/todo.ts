export enum TodoStatus {
    DONE = 'done',
    NOT_DONE = 'not_done'
}

export type TodoType = { id: string; description: string; status: TodoStatus; }