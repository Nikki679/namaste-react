import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import ResturantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense  fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading....</h1>}><Contact /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
