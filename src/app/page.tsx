"use client";

import { Card, Filters, InputWithButton, Layout, Title } from "@/components";
import TodoList from "@/components/TodoList";

import { Page, PageTitle } from "./styles";

export default function Home() {
  return (
    <Page>
      <Layout>
        <Title level="h1" styles={PageTitle}>
          Список дел
        </Title>
        <Card>
          <InputWithButton />
        </Card>
        <Filters />
        <TodoList />
      </Layout>
    </Page>
  );
}
