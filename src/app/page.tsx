"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

import { AddTodo, Filters, Layout, Title } from "@/components";
import TodoList from "@/components/TodoList";

import type { TodoStatus } from "@/types/todo";

import { Page, pageTitle, filters, addTodo } from "./styles";

export default function Home() {
  const [status, setStatus] = useState<TodoStatus | null>(null);

  return (
    <Provider store={store}>
      <Page>
        <Layout>
          <Title level="h1" styles={pageTitle}>
            Список дел
          </Title>
          <AddTodo styles={addTodo} />
          <Filters styles={filters} onClick={setStatus} />
          <TodoList filter={status} />
        </Layout>
      </Page>
    </Provider>
  );
}
