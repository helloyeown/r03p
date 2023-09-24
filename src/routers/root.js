import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "../pages/products/LoadingPage";

// products
const Products_Index = lazy(() => import("../pages/products/indexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))

const router = createBrowserRouter([

    {
        path: "products",
        element: <Suspense fallback={LoadingPage}><Products_Index/></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={LoadingPage}><Products_List/></Suspense>
            }
        ]
    }

])