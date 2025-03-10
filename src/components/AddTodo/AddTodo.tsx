import { useAppDispatch } from "@/store";
import { todoAdded } from "@/store/features/todos/todosSlice";

import Card from "../Card";
import InputWithButton from "../InputWithButton";

import type { AddTodoProps } from "./types";

const AddTodo = ({ styles }: AddTodoProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card styles={styles}>
      <InputWithButton
        placeholder="Создать задачу"
        onAdd={(description) => dispatch(todoAdded({ description }))}
      />
    </Card>
  );
};

export default AddTodo;
