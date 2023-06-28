
// We want to display the amount of items in the car on the navbar
interface NavProps{
    cartItemCout: number;

}


const NavBar = ({cartItemCout}:NavProps) => {
  return (
    <div>
        NavBar: {cartItemCout}
    </div>
  )
}

export default NavBar