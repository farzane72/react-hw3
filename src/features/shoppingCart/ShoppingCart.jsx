import { useLoaderData } from "react-router-dom";
import { GetLocalStorage } from "../../services/localStorage/LoStorageProducts";
import Button from "../../ui/button/Button";
import ItemCart from "./ItemCart";
import { useProducts } from "../../contexts/ProductsContext";
function ShoppingCart() {
  const selectedProducts=useLoaderData()
  const{cartItems,deleteMyCart}=useProducts()
  //console.log(selectedProducts);
  const totalPrice=selectedProducts.reduce(((sum,item)=>sum + (item.qty * item.price)),0)
    //const {}=props
  return (
    <div className="flex flex-row m-8 gap-2">
      <div className="basis-3/4 ">
        <div className="flex flex-col gap-2">
          {
            selectedProducts.map((cartProduct => (  <ItemCart cartProduct={cartProduct} key={cartProduct.id} /> )))
          }
         
        </div>
      </div>
      <div className=" basis-1/4  h-[120px] border rounded-md  p-2 ">
        <p className="">
            <span className="text-blue-500">Total Items:</span>
            <span className=""> {cartItems}</span>

        </p>
        <p className="">
            <span className="text-blue-500">Total Payment:</span>
            <span className="">{totalPrice}$</span>

        </p>
        <div className="flex justify-between mt-4">
            <Button variant="contained" callback={deleteMyCart}>
                Clear
            </Button>
            <Button variant="outlined">
                Checkout
            </Button>

        </div>
      </div>
    </div>
  );
}
export async function loader(){
  const selectedProducts=GetLocalStorage('myCart')
  return selectedProducts
}

export default ShoppingCart;
