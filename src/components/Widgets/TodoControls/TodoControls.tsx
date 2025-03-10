import { Delete, Edit } from "@/assets/svg";

import type { TodoControlsProps } from "./types";

import { Button, Wrapper } from "./styles";

const TodoControls = ({
  isEdited,
  onEdit,
  onDone,
  onDelete,
}: TodoControlsProps) => {
  return (
    <Wrapper>
      {isEdited ? (
        <Button $type="save" onClick={onDone}>
          Сохранить
        </Button>
      ) : null}
      <Button $type="edit" onClick={onEdit}>
        <Edit />
      </Button>
      <Button $type="delete" onClick={onDelete}>
        <Delete />
      </Button>
    </Wrapper>
  );
};

export default TodoControls;
