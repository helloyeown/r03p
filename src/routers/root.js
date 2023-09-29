import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "../pages/products/LoadingPage";

// products
const Products_Index = lazy(() => import("../pages/products/indexPage"))
const Products_List = lazy(() => import("../pages/products/ListPage"))
const Products_Read = lazy(() => import("../pages/products/ReadPage"))
const Products_Modify = lazy(() => import("../pages/products/ModifyPage"))

const router = createBrowserRouter([

    {
        path: "products",
        element: <Suspense fallback={LoadingPage}><Products_Index/></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={LoadingPage}><Products_List/></Suspense>
            },
            {
                path: "read/:pno",
                element: <Suspense fallback={LoadingPage}><Products_Read/></Suspense>
            },
            {
                path: "modify/:pno",
                element: <Suspense fallback={LoadingPage}><Products_Modify/></Suspense>
            }
        ]
    }

])