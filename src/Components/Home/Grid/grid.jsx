
import {FaStar,FaRegStar} from 'react-icons/fa'
import { useAppContext } from '../../../Context/context'

const Grid = ({product}) => {
    const {state : {cart} , dispatch} = useAppContext()    
    console.log(cart);
  return (
    <div class=" border-2 border-inherit shadow-md shadow-black font-mono">
        <div class="m-2 leading-8 ">
        <img  src={product.image} alt="" />
        <div class="text-lg font-black">{product.name}</div>
        <div>INR  &nbsp;{product.price}</div>
        {product.fastDelivery ? <div>Fast Delivery</div> : <div>4 days delivery</div> }
        <div class="flex mb-3">
        {
            [...Array(5)].map((_,i)=>{
                return(
                    <span key={i}>
                        {product.ratings > i ? <FaStar/> : <FaRegStar/>}
                    </span>
                )
            })
        }
        </div>
        {cart.some(p => p.id === product.id) ? (<button class="border border-red-500 p-2 px-4 rounded hover:bg-red-600" onClick={() => {dispatch({type : "REMOVE_FROM_CART", payload : product})}}>Remove From Cart</button>) : (<button class="border border-green-500 p-2 px-4 rounded hover:bg-green-600" onClick={() => {dispatch({type : "ADD_TO_CART", payload : product})}} disabled={!product.inStock}>{!product.inStock ? "Out Of Stock" : "Add to Cart"}</button>)}
         {/* {cartStatus ? 
         <button class="border border-green-500 p-2 px-4 rounded hover:bg-green-600" onClick={()=>setCartStatus(!cartStatus)} disabled={!product.inStock}>{!product.inStock ? "Out Of Stock" : "Add to Cart"}</button>
         :
        <button class="border border-red-500 p-2 px-4 rounded hover:bg-red-600" onClick={()=>setCartStatus(!cartStatus)}>Remove From Cart</button>
 } */}
        </div>
    </div>
  )
}

export default Grid