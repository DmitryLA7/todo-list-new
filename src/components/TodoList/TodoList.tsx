import { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { selectTodos, setTodosList } from "@/store/features/todos/todosSlice";

import Card from "../Card";
import Todo from "../Todo";
import Draggable from "../Draggable";

import TodoListData from "@/utils/todoData";

import type { TodoListProps } from "./types";

import { Wrapper } from "./styles";

const TodoList = ({ filter }: TodoListProps) => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const [draft, setDraft] = useState<typeof todos>([]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraft(todos);
  }, [todos]);

  const toggleDraft = (callback: (t: typeof todos) => typeof todos) =>
    setDraft(callback);

  const onDragEnd = () => {
    if (todos !== draft) {
      TodoListData.writeToStorage(todos);
      dispatch(setTodosList(draft));
    }
  };

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
          onDragEnd={onDragEnd}
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
