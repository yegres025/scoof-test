import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartTest from "./pages/start-test/start-test.tsx";
import Question from "./pages/question/question.tsx";
import Answer from "./pages/answer/answer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>err</div>,
    children: [
      {
        path: "/",
        element: <StartTest />,
        index: true,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/answer",
        element: <Answer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
