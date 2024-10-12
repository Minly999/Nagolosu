import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Test } from './pages/main/Test';
import { TestItself } from './pages/TestItself/TestItself';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    children: [
      {path: "test",
      element: <TestItself />
      } 
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
