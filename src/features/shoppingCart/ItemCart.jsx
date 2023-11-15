import { useProducts } from "../../contexts/ProductsContext";
import Button from "../../ui/button/Button";
function ItemCart({ cartProduct }) {
  const { name, price, qty, src, id } = cartProduct;
  const { addProduct, deleteProduct, countProduct, dispatch } = useProducts();
  //console.log(src);
  return (
    <div className="item-cart border rounded-md  p-2 flex justify-between items-center">
      <div className="w-[200px] h-[200px]">
        <img className="w-full h-full" src={`${src}`} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-blue-500">{name}</span>
        <span className="text-green-700">{price} $</span>
      </div>

      <div className="w-6 h-6 p-2 rounded-sm flex justify-center items-center text-white bg-orange-500">
        {qty}
      </div>
      <div className=" flex gap-2 " >
       
        <Button variant="outlined" callback={() => addProduct(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </Button>
        <Button variant="outlined" callback={() => deleteProduct(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default ItemCart;
