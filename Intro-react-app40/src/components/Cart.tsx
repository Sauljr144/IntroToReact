
// We want to display the items in the CartItem in the useState in the app
// Also a function to clear the array
interface cartProps{
    cartItems: string[]
    onClear: ()=> void;
}

const Cart = ({cartItems, onClear}:cartProps) => {
  return (
    <>
    <div>
        Cart
    </div>
    <ul>
        {cartItems.map(item => <li key={item}>{item}</li>)}

    </ul>
    <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart