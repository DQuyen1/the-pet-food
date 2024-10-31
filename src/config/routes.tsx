import RootLayout from "../components/RootLayout";
import AdminOrderDetail from "../pages/admin_order_detail";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import OrderList from "../pages/ListOfOrder";
import Login from "../pages/Login";
import MainPage from "../pages/mainPage";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";
import OrderDetail from "../pages/OderDetail";
import Order from "../pages/Order";
import Policy from "../pages/Policy";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import Signup from "../pages/SignUp";
// import Signup from "../pages/SignUp";

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
        path: "/order/:id",
        element: <Order />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/order-detail/:orderId",
        element: <OrderDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/orders",
    element: <OrderList />,
  },

  {
    path: "/admin_order_detail/:orderId",
    element: <AdminOrderDetail />,
  },
];
