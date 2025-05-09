import { useState } from "react";

import { AddTodo, Layout, Title, TodoList, Filters } from "@/components";

import useTodoLocalStorageSession from "@/hooks/useTodoLocalStorage";

import { TodoStatus } from "@/types/todo";

import {
  addTodo,
  pageTitle,
  Sticky,
  TodosListWrapper,
  Wrapper,
} from "./styles";

const Page = () => {
  const [status, setStatus] = useState<TodoStatus | null>(null);

  useTodoLocalStorageSession();

  return (
    <Wrapper>
      <Layout>
        <Sticky>
          <Title level="h1" styles={pageTitle}>
            Список дел
          </Title>
          <AddTodo styles={addTodo} />
          <Filters onClick={setStatus} activeStatus={status} />
        </Sticky>
        <TodosListWrapper>
          <TodoList filter={status} />
        </TodosListWrapper>
      </Layout>
    </Wrapper>
  );
};

export default Page;
