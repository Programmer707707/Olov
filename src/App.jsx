import {Login, New, Single, List, Home} from "./pages/index";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    index: true,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/users",
    element: <List/>,
    children: [
      {
        path: "new",
        element: <New/>,
      },
      {
        path: ":userId",
        element: <Single/>,
      },
    ]
  },
  {
    path: "/companies",
    element: <List/>,
    children: [
      {
        path: "new",
        element: <New/>,
      },
      {
        path: ":companyId",
        element: <Single/>,
      },
    ]
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
