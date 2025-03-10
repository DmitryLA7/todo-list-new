import Button from "@/components/Button";

import type { FiltersProps } from "./types";

import { filterButton, Wrapper } from "./styles";

const Filters = ({ styles }: FiltersProps) => {
  return (
    <Wrapper $styles={styles}>
      <Button styles={filterButton}>Все</Button>
      <Button styles={filterButton} colorScheme="green">
        Выполнено
      </Button>
      <Button styles={filterButton} colorScheme="red">
        Не выполнено
      </Button>
    </Wrapper>
  );
};

export default Filters;
