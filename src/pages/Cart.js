import { Usecart } from "../Context/CartContext"
import CartProduct from "../components/CartProduct"

function Cart() {
  const { cart } = Usecart()

  return (
    <section className="padding-y">
      <div className="max-container">
        <div className="grid grid-cols-5 max-md:grid-cols-4 pb-2 text-center">
          <h2 className="cart-heading max-md:col-span-2 text-left">Item</h2>
          <h2 className="cart-heading max-md:hidden">Price</h2>
          <h2 className="cart-heading">Quantity</h2>
          <h2 className="cart-heading max-md:hidden">SubTotal</h2>
          <h2 className="cart-heading">Remove</h2>
        </div>
        <hr className="w-full bg-blue-400 border"/>  
        <div className="flex flex-col">
          {
            cart.map((item)=>(
              <CartProduct key={item.id} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default Cart