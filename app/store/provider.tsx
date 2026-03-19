"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "@/components/theme-provider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
}