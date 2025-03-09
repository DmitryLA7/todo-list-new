import Button from "@/components/Button";

import { filterButton, Wrapper } from "./styles";

const Filters = () => {
  return (
    <Wrapper>
      <Button styles={filterButton}>Все</Button>
      <Button styles={filterButton} colorScheme="green">Выполнено</Button>
      <Button styles={filterButton} colorScheme="red">Не выполнено</Button>
    </Wrapper>
  );
};

export default Filters;
