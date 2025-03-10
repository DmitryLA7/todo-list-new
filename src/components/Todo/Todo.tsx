import { useState } from "react";
import { useAppDispatch } from "@/store";
import {
  todoDeleted,
  toggleDescription,
  toggleStatus,
} from "@/store/features/todos/todosSlice";

import Title from "../Title";
import { TodoControls } from "../Widgets";

import type { TodoProps } from "./types";

import {
  Description,
  DescriptionWrapper,
  StatusButton,
  StyledTodo,
  Wrapper,
} from "./styles";
import { ResizableInput } from "../Inputs";

const Todo = ({ id, description, status }: TodoProps) => {
  const [edited, setEdited] = useState(false);
  const [draftDescr, setDraftDescr] = useState(description);

  const dispatch = useAppDispatch();

  const onDone = () => {
    setEdited(false);
    dispatch(toggleDescription({ id, description: draftDescr }));
  };

  return (
    <Wrapper>
      <StyledTodo>
        <Title level="h2">Сегодня</Title>
        <DescriptionWrapper>
          <StatusButton
            $status={status}
            onClick={() => dispatch(toggleStatus(id))}
          />
          {edited ? (
            <ResizableInput value={draftDescr} onChangeValue={setDraftDescr} />
          ) : (
            <Description $status={status}>{description}</Description>
          )}
        </DescriptionWrapper>
      </StyledTodo>
      <TodoControls
        isEdited={edited}
        onEdit={() => setEdited((e) => !e)}
        onDone={onDone}
        onDelete={() => dispatch(todoDeleted(id))}
      />
    </Wrapper>
  );
};

export default Todo;
