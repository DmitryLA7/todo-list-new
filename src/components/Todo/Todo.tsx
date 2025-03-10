import Title from "../Title";
import { TodoControls } from "../Widgets";

import { TodoStatus } from "@/types/todo";
import type { TodoProps } from "./types";

import {
  Description,
  DescriptionWrapper,
  StatusButton,
  StyledTodo,
  Wrapper,
} from "./styles";
import { ResizableInput } from "../Inputs";

const Todo = ({ id, description, status, isEdited }: TodoProps) => {
  return (
    <Wrapper>
      <StyledTodo>
        <Title level="h2">Сегодня</Title>
        <DescriptionWrapper>
          <StatusButton $status={status} />
          {isEdited ? (
            <ResizableInput />
          ) : (
            <Description $status={TodoStatus.NOT_DONE} $active>
              {description}
            </Description>
          )}
        </DescriptionWrapper>
      </StyledTodo>
      <TodoControls id={id} isEdited={isEdited} />
    </Wrapper>
  );
};

export default Todo;
