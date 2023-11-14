import Button from "../../ui/button/Button"
import { GetProducts } from "../../services/api/ApiProducts"
import { Link, useLoaderData } from "react-router-dom"
function SingleProduct() {
   
    const product=useLoaderData()
     const {name,category,des,price,src}=product
    return (
        <div className="mt-8  border rounded-md   w-[800px] h-[400px] mx-auto ">
            <div className="p-4  grid  grid-cols-2">
                <div className="">
                    <img className="w-full h-full p-4" src={`${src}`} />
                  
                </div>
                <div className="flex justify-center items-center   ">
                    <div className="p-2 border rounded-md flex flex-col gap-4">
                        <p className="text-blue-500 ">{name}</p>
                        <p className="">{des}</p>
                        <p className="">
                            <span className="text-orange-500">Category: </span> 
                            <span className=""> {category}</span>
                        </p>

                        <div className="flex justify-between gap-4">
                            <div className="flex text-white bg-green-600 rounded-md px-2 py-1">
                                <span className=" ">
                                    {price}
                                </span>
                                <span className="">
                                    $
                                </span>
                                
                            </div>
                            <Link to='/products'>
                                <Button variant="outlined">
                                    Back to Shop 
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function loader({params}){
    const product=GetProducts({endPoint:"products/",params:params.productId})
    return product
}


export default SingleProduct
