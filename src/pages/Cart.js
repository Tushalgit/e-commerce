import { Link, NavLink } from "react-router-dom"
import { Usecart } from "../Context/CartContext"
import CartProduct from "../components/CartProduct"
import Button from "../components/Button"

function Cart() {
  const { cart, clearcart } = Usecart()

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-4 h-[50vh]">
        <h2 className=" text-red-600 text-lg font-medium">Your Cart is empty</h2>
        <Link to="/products"><Button name="Shop Now"></Button></Link>
      </div>
    )
  }

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
        <hr className="w-full bg-blue-400 border" />
        <div className="flex flex-col">
          {
            cart.map((prod, index) => (
              <CartProduct key={prod.id} {...prod} />
            ))
          }
        </div>
        <hr className="my-4 border border-slate-200" />
        <div className="grid grid-cols-4 max-sm:grid-cols-2">
          <NavLink to="/products" className="lg:col-span-3">
            <Button name="Shop More"></Button>
          </NavLink>
          <div className="flex justify-center">
            <button className="lg:w-[40%] lg:ml-5 border-none outline-none px-3 py-2 bg-red-400 rounded-md text-sm font-medium cursor-pointer hover:scale-105 transition-all" onClick={clearcart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart