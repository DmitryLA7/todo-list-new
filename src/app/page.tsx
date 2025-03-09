"use client";

import { Button, Card, InputWithButton, Layout, Title } from "@/components";
import Todo from "@/components/Todo";

import { ButtonColorsSchemes } from "@/components/Button/types";

import { Page, PageTitle } from "./styles";
import TodoList from "@/components/TodoList";

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
        <TodoList />
      </Layout>
    </Page>
  );
}
