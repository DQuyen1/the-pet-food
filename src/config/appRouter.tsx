import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { routes } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
        errorElement={route.errorElement}
      >
        {route.children?.map((child) => (
          <Route key={child.path} path={child.path} element={child.element} />
        ))}
      </Route>
    ))
  )
);
