import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Shared/Register/Register";
import Signin from "../pages/Shared/Signin/Signin";
import Jobdetails from "../pages/Jobdetails/Jobdetails";
import PrivetRouts from "../Privetrouts/PrivetRouts";
import ApplyForm from "../pages/Applyfrom/ApplyForm";
import Myapplication from "../pages/Myappliacation/Myapplication";
import Addjob from "../pages/Addjob/Addjob";
import Mypostedjobs from "../pages/Mypostedjobs/Mypostedjobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>route not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: `/jobs/:id`,
        element: <PrivetRouts><Jobdetails></Jobdetails></PrivetRouts>,
        loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: "/apply/:id",
        element:<PrivetRouts><ApplyForm></ApplyForm></PrivetRouts>
      },
      {
        path: "/application",
        element: <PrivetRouts> <Myapplication></Myapplication> </PrivetRouts>
      },
      {
        path:"/postjob",
        element: <PrivetRouts><Addjob></Addjob></PrivetRouts>
      },
      {
        path:"/mypostjob",
        element: <PrivetRouts><Mypostedjobs></Mypostedjobs> </PrivetRouts>,
      }
    ],
  },
]);

export default router;
