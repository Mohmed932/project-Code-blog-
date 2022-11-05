import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, Fragment } from "react";
import PageNotfound from "./components/PageNotfound/PageNotfound";

const Result = lazy(() => import("./components/Result/Result"));
const Forms = lazy(() => import("./components/Forms/Forms"));
const Route = lazy(() => import("./Route"));
const Loading = lazy(() => import("./components/Loaging/Loading"));
const Detalies = lazy(() => import("./components/Detalies/Detalies"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Route />,
      children: [
        { index: true, element: <Forms /> },
        { path: "result", element: <Result /> },
        { path: "/prodect/:id", element: <Detalies /> },
        { errorElement: <PageNotfound /> },
      ],
    },
    { path: "*", element: <PageNotfound /> },
  ]);
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Fragment>
  );
};

export default App;
