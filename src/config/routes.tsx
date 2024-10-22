import RootLayout from "../components/RootLayout";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
//import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import Policy from "../pages/Policty";
import Shop from "../pages/Shop";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/policy",
        element: <Policy />,
      },

      {
        path: "/404",
        element: <NotFound />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
];
