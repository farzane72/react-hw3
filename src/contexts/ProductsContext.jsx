import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  GetLocalStorage,
  SetLocalStorage,
  EditQtyLocalStorage,
  DeleteLocalStorage
} from "../services/localStorage/LoStorageProducts";

import { useLocalStorageState } from "../services/localStorage/useLocalStorageState";


const ProductsContext = createContext();
const initialState = {
  myCartProducts: (GetLocalStorage("myCart")),
 //myCartProducts:useLocalStorageState([],"myCart"),
  countProduct: 0,
};
function reducer(state, action) {
  switch (action.type) {
    // case "addCart":
    //   return { ...state, myCartProducts: action.payload };
    //------------------second after set----------------
    case "addCart":
        //bayad check ham bokonam ke az ghabl bashe add nakone
   return { ...state, myCartProducts: [...state.myCartProducts,action.payload] };

   case "render":
    return { ...state, myCartProducts: [...state.myCartProducts] };
    


    case "add":
      return {
        ...state,
        myCartProducts: state.myCartProducts.map((item) =>
          item.id === action.payload ? { ...item, qty: +item.qty + 1 } : item
        ),
      };
    case "delete":
      if (
        state.myCartProducts.find((item) => item.id === action.payload)?.qty ===
        1
      )
        return {
          ...state,
          myCartProducts: state.myCartProducts.filter(
            (item) => item.id != action.payload
          ),
        };
      else
        return {
          ...state,
          myCartProducts: state.myCartProducts.map((item) =>
            item.id === action.payload ? { ...item, qty: +item.qty - 1 } : item
          ),
        };

    default:
      throw new Error("you didn't choose any case");
  }
}
function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { myCartProducts, countProduct } = state;
  let cartItems = myCartProducts.reduce((sum, item) => sum + item.qty, 0);
  //console.log(myCartProducts);
  //console.log(cartItems);

  function addToCart(data) {

   // dispatch({ type: "addCart", payload: items });
   dispatch({ type: "addCart", payload: data });

    SetLocalStorage({
      nameLocalStorage: "myCart",
      data: data,
    });
    
    
  }
  function addProduct(id) {
    console.log(id);
    dispatch({type:'add',payload:id})
    //-------------------------------------------------------------
    // EditQtyLocalStorage({
    //   arrayCart: myCartProducts,
    //   nameLocalStorage: "myCart"
   
    // });
  }
  function deleteProduct(id) {
    dispatch({type:'delete',payload:id})

    //-------------------------------------------------
    // EditQtyLocalStorage({
    //   arrayCart: myCartProducts,
    //   nameLocalStorage: "myCart"
    
    // });
  }

  function deleteMyCart(){
    DeleteLocalStorage("myCart")

  }
  // const addToCart=useCallback((data)=>{
  //     SetLocalStorage({
  //                 nameLocalStorage: "myCart",
  //                 data:data

  //             })

  // },[cartItems])
  useEffect(() => {
   
  EditQtyLocalStorage({
   arrayCart: myCartProducts,
   nameLocalStorage: "myCart"
 
 });

   
 }, [myCartProducts,dispatch]);

  return (
    <ProductsContext.Provider
      value={{
        addToCart,
        cartItems,
        myCartProducts,
        countProduct,
        addProduct,
        deleteProduct,
        deleteMyCart,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
function useProducts() {
  const context = useContext(ProductsContext);
  if (context === null)
    throw new Error("use context was used outside auth provider");
  return context;
}
export { ProductsProvider, useProducts };
