"use client";

import { Card, Filters, InputWithButton, Layout, Title } from "@/components";
import TodoList from "@/components/TodoList";

import { addTodo, Page, pageTitle, filters } from "./styles";

export default function Home() {
  return (
    <Page>
      <Layout>
        <Title level="h1" styles={pageTitle}>
          Список дел
        </Title>
        <Card styles={addTodo}>
          <InputWithButton />
        </Card>
        <Filters styles={filters} />
        <TodoList />
      </Layout>
    </Page>
  );
}
