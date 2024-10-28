import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/main/HomePage";
import { UkrainianLang } from "./pages/UkrainianLang/UkrainianLang";
import { Nagolosu } from "./pages/UkrainianLang/Nagolosu/Nagolosu";
import { History } from "./pages/History/History";
import { HistoryTopics } from "./pages/History/Topics/HistoryTopics";
import { HistoryPortraits } from "./pages/History/Portraits/HistoryPortraits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ukrainianlang",
    element: <UkrainianLang />,
    children: [
      {
        path: "nagolosu",
        element: <Nagolosu />,
      },
    ],
  },
  {
    path: "/history",
    element: <History />,
    children: [
      {
        path: "topics",
        element: <HistoryTopics />
      },
      {
        path: "portraits",
        element: <HistoryPortraits />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
