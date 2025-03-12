"use client";

import { Provider } from "react-redux";
import { store } from "@/store";

import { Page } from "@/components";

export default function Home() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
