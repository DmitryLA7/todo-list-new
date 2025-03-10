import { useAppSelector } from "@/store";
import { selectTodos } from "@/store/features/todos/todosSlice";

import Card from "../Card";
import Todo from "../Todo";

import type { TodoListProps } from "./types";

import { Wrapper } from "./styles";

const TodoList = ({ filter }: TodoListProps) => {
  const todos = useAppSelector(selectTodos);

  const filtred = filter
    ? todos.filter(({ status }) => status === filter)
    : todos;

  return (
    <Wrapper>
      {filtred.map(({ id, description, status }) => (
        <Card key={id}>
          <Todo id={id} description={description} status={status} />
        </Card>
      ))}
    </Wrapper>
  );
};

export default TodoList;
