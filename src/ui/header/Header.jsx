//import { Link } from "react-router-dom";
import {  Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
function Header() {
  const navigate=useNavigate()
  const{cartItems}=useProducts()
  return (
    <div className="w-full bg-white   border-b-2 shadow-2xl  ">
      <div className=" md:container mx-auto p-4   flex justify-between">
        <div className=" border-b-2 text-blue-500 border-blue-500 font-bold">
          <Link to='/products'> Products</Link>
         
        </div>
        <div className="relative" onClick={()=>(navigate('/shoppingcart'))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(59 130 246)"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="w-3 h-3 rounded-full absolute top-0 right-0 text-white bg-blue-800 flex items-center justify-center p-2">
            {cartItems}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
