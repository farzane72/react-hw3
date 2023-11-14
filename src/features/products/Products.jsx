import Product from "./Product"
//import SingleProduct from "./SingleProduct"
//import ShoppingCart from "../shoppingCart/ShoppingCart"
import {useLoaderData} from 'react-router-dom'
import { GetProducts } from "../../services/api/ApiProducts"
function Products() {
    const products=useLoaderData()
    return (
         <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
            
            {products.map(product=><Product product={product} key={product.id} />)}
        </div>
    )
}
export async function loader(){
    const products=GetProducts({endPoint:"products"})
    return products
}

export default Products
