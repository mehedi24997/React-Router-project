import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Loading from "./Loading";
import ProductsDetails from "./ProductsDetails";
import Products from "./Products";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <RootLayout></RootLayout>,
        children : [
            {
                index : true,
                element : <Home></Home>,
                loader : () => fetch('/data.json'),
                hydrateFallbackElement : <Loading></Loading>
            },
            {
                path : '/products-details/:id',
                element : <ProductsDetails></ProductsDetails>,
                loader : async ({params}) => {
                const data = await fetch('/data.json')
                const res = await data.json()
                const singleProducts = res.find((product) => product.id === parseInt(params.id))
                return singleProducts
                },
                hydrateFallbackElement : <Loading></Loading>
            },
            {
                path : '/products',
                element : <Products></Products>,
                loader : () => fetch('/data.json')
            }
        ]
    }
])