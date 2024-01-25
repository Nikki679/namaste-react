import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/slice/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="bg-black text-white rounded p-2 m-2" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty!! Please add items to cart</h1>}
            <div className="w-6/12 mx-auto">
            <ItemList itemCards={cartItems} />
            </div>
        </div>
    )
}

export default Cart;