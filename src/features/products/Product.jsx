import Button from "../../ui/button/Button";
import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
function Product({ product }) {
  const { name, price, src, id } = product;
  const { addToCart, myCartProducts ,addProduct,deleteProduct} = useProducts();
  //console.log(myCartProducts);
  //   function handleCart(){
  //     addToCart({...product,qty:1})
  //   }
  return (
    <div className="bg-white w-[200px] h-[300px] p-2  flex flex-col gap-1 border rounded-md hover:shadow-2xl">
      <div className="h-[180px]">
        <img className="w-full h-full" src={`${src}`} />
      </div>
      <div className="h-[120px] flex flex-col gap-2  ">
        <span className="font-bold ">{name}</span>
        <span>{price}</span>
        <div className="flex justify-between items-center">
          <Link to={`/products/${id}`}>
            <Button variant="contained">Details</Button>
          </Link>
          {/* <Button variant="outlined" callback={ addToCart({...product,qty:1})} >Add to Cart</Button> */}

          <div className="flex justify-between gap-1">
            {myCartProducts.find((item) => item.id === id) ? (
              <>
                <Button variant="outlined">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </Button>
                <Button variant="outlined" classMore="py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </Button>
              </>
            ) : (
              <button
                className="bg-blue-500 px-2 py-1 rounded-md text-white"
                onClick={() => addToCart({ ...product, qty: 1 })}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
