import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { TasksProvider } from "./contexts/tasksContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>,
);
