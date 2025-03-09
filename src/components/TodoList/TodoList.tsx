import Card from "../Card";
import Todo from "../Todo/Todo";
import { TodoType, TodoStatus } from "../Todo/types";
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
          <Todo id={id} description={description} status={status} />
        </Card>
      ))}
    </Wrapper>
  );
};

export default TodoList;
