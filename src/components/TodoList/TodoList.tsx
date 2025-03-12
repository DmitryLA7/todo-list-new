import { useAppSelector } from "@/store";
import { selectTodos } from "@/store/features/todos/todosSlice";

import Card from "../Card";
import Todo from "../Todo";

import type { TodoListProps } from "./types";

import { Wrapper } from "./styles";
import Draggable from "../Draggable";
import { useRef } from "react";

const TodoList = ({ filter }: TodoListProps) => {
  const todos = useAppSelector(selectTodos);
  const ref = useRef<HTMLDivElement>(null);
  const filtred = filter
    ? todos.filter(({ status }) => status === filter)
    : todos;

  return (
    <Wrapper ref={ref}>
      {filtred.map(({ id, description, status }) => (
        <Draggable key={id} containerRef={ref}>
          <Card>
            <Todo id={id} description={description} status={status} />
          </Card>
        </Draggable>
      ))}
    </Wrapper>
  );
};

export default TodoList;
