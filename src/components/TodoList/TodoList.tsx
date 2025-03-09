import Card from "../Card";
import Todo from "../Todo";

import { TodoStatus, TodoType } from "@/types/todo";

import { Wrapper } from "./styles";

const TodoList = () => {
  const mock: TodoType[] = [
    { id: 1, description: "Test", status: TodoStatus.DONE },
    { id: 2, description: "Test1", status: TodoStatus.NOT_DONE },
  ];

  return (
    <Wrapper>
      {mock.map(({ id, description, status }) => (
        <Card key={id}>
          <Todo
            id={id}
            description={description}
            status={status}
            isEdited={id === 1 ? true : false}
          />
        </Card>
      ))}
    </Wrapper>
  );
};

export default TodoList;
