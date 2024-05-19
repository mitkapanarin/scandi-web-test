import { Component } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage, Home } from "./Pages";
import { GeneralPagesRoutes } from "./Pages/Logic";

export class App extends Component {
  GeneralRoutes: RouteObject[] = [
    {
      path: "/",
      element: <GeneralPagesRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ];

  router = createBrowserRouter([...this.GeneralRoutes]);

  render() {
    return <RouterProvider router={this.router} />;
  }
}

export default App;