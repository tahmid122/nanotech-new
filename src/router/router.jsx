import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import AccountInfo from "../pages/AccountInfo/AccountInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "product/:id", Component: ProductDetails },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      { path: "login", Component: Login },
      { path: "account", Component: AccountInfo },
    ],
  },
]);
