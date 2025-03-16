import { type Interpolation } from "styled-components";

import type { TodoStatus } from "@/types/todo";

export type FiltersProps = Partial<{ styles: Interpolation<React.CSSProperties> }> & { onClick: (s: TodoStatus | null) => void, activeStatus: TodoStatus | null }