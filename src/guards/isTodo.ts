import { TodoType } from "@/types/todo";

const isTodo = (a: unknown): a is TodoType => {
    if (typeof a === 'object' && a !== null && "id" in a && "description" in a && 'status' in a) return true;

    return false;
}

export default isTodo