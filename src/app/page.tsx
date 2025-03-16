"use client";

import { Provider } from "react-redux";
import { store } from "@/store";

import { Page } from "@/components";

import GlobalStyles from "./styles";

export default function Home() {
  return (
    <Provider store={store}>
      <Page />
      <GlobalStyles />
    </Provider>
  );
}
