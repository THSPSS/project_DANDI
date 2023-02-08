import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Course from "./pages/Course"
import Home from "./pages/Home"
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Navbar/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/course",
        element:<Course/>
      },
    ]
  }
])



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
