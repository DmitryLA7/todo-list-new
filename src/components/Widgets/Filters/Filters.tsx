import Button from "@/components/Button";

import type { FiltersProps } from "./types";
import { TodoStatus } from "@/types/todo";

import { filterButton, Wrapper } from "./styles";

const Filters = ({ onClick, styles }: FiltersProps) => {
  return (
    <Wrapper $styles={styles}>
      <Button styles={filterButton} onClick={() => onClick(null)}>
        Все
      </Button>
      <Button
        styles={filterButton}
        colorScheme="green"
        onClick={() => onClick(TodoStatus.DONE)}
      >
        Выполнено
      </Button>
      <Button
        styles={filterButton}
        colorScheme="red"
        onClick={() => onClick(TodoStatus.NOT_DONE)}
      >
        Не выполнено
      </Button>
    </Wrapper>
  );
};

export default Filters;
