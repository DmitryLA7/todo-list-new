import { Delete, Edit } from "@/assets/svg";

import type { TodoControlsProps } from "./types";

import { Button, Wrapper } from "./styles";

const TodoControls = ({ id, isEdited }: TodoControlsProps) => {
  return (
    <Wrapper>
      {isEdited ? <Button $type="save">Сохранить</Button> : null}
      <Button $type="edit">
        <Edit />
      </Button>
      <Button $type="delete">
        <Delete />
      </Button>
    </Wrapper>
  );
};

export default TodoControls;
