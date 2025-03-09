import Title from "../Title";
import { TodoControls } from "../Widgets";

import { TodoProps, TodoStatus } from "./types";

import {
  Description,
  DescriptionWrapper,
  StatusButton,
  StyledTodo,
  Wrapper,
} from "./styles";

const Todo = ({ id, description, status }: TodoProps) => {
  return (
    <Wrapper>
      <StyledTodo>
        <Title level="h2">Сегодня</Title>
        <DescriptionWrapper>
          <StatusButton $status={status} />
          <Description $status={TodoStatus.NOT_DONE} $active>
            {description}
          </Description>
        </DescriptionWrapper>
      </StyledTodo>
      <TodoControls />
    </Wrapper>
  );
};

export default Todo;
