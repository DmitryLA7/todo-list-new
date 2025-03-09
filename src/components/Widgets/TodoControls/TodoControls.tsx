import { Delete, Edit } from "@/assets/svg";

import { Button, Wrapper } from "./styles";

const TodoControls = () => {
  return (
    <Wrapper>
      <Button $type="save">Сохранить</Button>
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
