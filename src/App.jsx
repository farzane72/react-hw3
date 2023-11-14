
import SingleProduct,{loader as SingleProductLoader} from './features/products/SingleProduct';
import ShoppingCart,{loader as SelectedProducts} from './features/shoppingCart/ShoppingCart';
import AppLayout from './ui/appLayout/AppLayout';
import Home from './ui/home/Home';
import { ProductsProvider } from './contexts/ProductsContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products ,{loader as ProductsLoader} from './features/products/products';
import Error from './ui/Error/Error'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    
  },
  
  {
    
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      
      
      {
        path:'/products',
        element:<Products />,
        loader:ProductsLoader,
        errorElement:<Error />,
      },
      {
        path:'/products/:productId',
        element:<SingleProduct />,
        loader:SingleProductLoader,
        errorElement:<Error />,
      },
      {
        path:'/shoppingcart',
        element:<ShoppingCart />,
        loader:SelectedProducts
      },
      
      

    ]
    
  },



])

//import viteLogo from '/vite.svg'


//<img src={viteLogo} className="logo" alt="Vite logo" />
function App() {
 

  return(
    <ProductsProvider>
         <RouterProvider router={router} />
    </ProductsProvider>

  )
    
}

export default App
