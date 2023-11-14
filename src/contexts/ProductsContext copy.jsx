
import { createContext, useCallback, useContext,useEffect,useReducer } from "react";
import { GetLocalStorage, SetLocalStorage,EditQtyLocalStorage } from "../services/localStorage/LoStorageProducts";
import ItemCart from "../features/shoppingCart/ItemCart";

const ProductsContext=createContext()
const initialState={
    cartItems:0,
    selectedId:null,
    selectedProduct:null,
    myCartProducts:null,
    countProduct:0
   // countProduct:+(selectedProduct.qty) 

}
function reducer(state,action){
    switch(action.type){
        case('addCart'):
             return {...state,cartItems:action.payload[0],myCartProducts:action.payload[1]};
        // case('getCart'):
        //     return {...state,myCartProducts:action.payload};
        case('clear'):
            return {...state,myCartProducts:null};
        case('select'):
           // return {...state,selectedId:action.payload};
           return ( {...state,selectedProduct:action.payload});
        // case('edit'):
        //     return {...state,selectedProduct:action.payload};
        case('setCount'):
        return {...state,countProduct:action.payload}
        case('add'):
            
           // return {...state,countProduct:state.countProduct+1};
         //  return {...state,countProduct:action.payload+1};
         return {...state,countProduct:state.countProduct+1};
        case('delete'):
            if(state.countProduct<0) return;
           // return {...state,countProduct:(+(state.selectedProduct.qty))-1};
           return {...state,countProduct:state.countProduct-1};
        default:
            throw new Error("you didn't choose any case");
    }

}
function ProductsProvider({children}) {

    const [state,dispatch]=useReducer(reducer,initialState)
    const{selectedId, myCartProducts,countProduct,cartItems,selectedProduct}=state

  //let  cartItems=0

function addToCart(data){

    SetLocalStorage({
        nameLocalStorage: "myCart",
        data:data
            
    })
    //dispatch({type:'select',payload:data.id})


 }
  function addProduct(cartProduct){
    
    dispatch({type:'select',payload:cartProduct})
    
   console.log(countProduct);
    
   // dispatch({type:"add" ,payload:cartProduct.qty})
    dispatch({type:"add" })
    EditQtyLocalStorage({arrayCart: myCartProducts,nameLocalStorage:"myCart",id:cartProduct.id,qty:countProduct})
   
   


 }
 function deleteProduct(cartProduct){
    dispatch({type:'select',payload:cartProduct})
    dispatch({type:"delete"})
  //  dispatch({type:"delete",payload:cartProduct.qty})
   // dispatch({type:"delete" ,payload:cartProduct})
    EditQtyLocalStorage({arrayCart: myCartProducts,nameLocalStorage:"myCart",id:cartProduct.id,qty:countProduct})
 }
// const addToCart=useCallback((data)=>{
//     SetLocalStorage({
//                 nameLocalStorage: "myCart",
//                 data:data
                    
//             })

// },[cartItems])
useEffect(()=>{

    const items=GetLocalStorage("myCart")
    const totalProducts=items.reduce((sum,item)=>sum+item.qty,0)
  // const cartItems=totalProducts;
    console.log(totalProducts);
    //dispatch({type:'getCart',payload:items})
 dispatch({type:'addCart',payload:[totalProducts,items]})


},[] )



   return <ProductsContext.Provider value={{ addToCart,cartItems,myCartProducts ,countProduct,addProduct,deleteProduct,dispatch}} >
            {children}
    </ProductsContext.Provider>
}
function useProducts(){
    const context=useContext(ProductsContext)
    if(context===null) throw new Error('use context was used outside auth provider')
 return context
}
export {ProductsProvider,useProducts} 
