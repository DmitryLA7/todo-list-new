import { useEffect, useRef, useState } from "react";

import { useAppSelector } from "@/store";
import { selectTodos } from "@/store/features/todos/todosSlice";

import Card from "../Card";
import Todo from "../Todo";
import Draggable from "../Draggable";

import type { TodoListProps } from "./types";

import { Wrapper } from "./styles";

const TodoList = ({ filter }: TodoListProps) => {
  const todos = useAppSelector(selectTodos);

  const [draft, setDraft] = useState<typeof todos>([]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraft(todos);
  }, [todos]);

  const toggleDraft = (callback: (t: typeof todos) => typeof todos) =>
    setDraft(callback);

  const filtred = filter
    ? draft.filter(({ status }) => status === filter)
    : draft;

  return (
    <Wrapper ref={ref}>
      {filtred.map(({ id, description, status }, index) => (
        <Draggable<typeof draft>
          key={id}
          index={index}
          toggleItems={toggleDraft}
        >
          <Card>
            <Todo id={id} description={description} status={status} />
          </Card>
        </Draggable>
      ))}
    </Wrapper>
  );
};

export default TodoList;
