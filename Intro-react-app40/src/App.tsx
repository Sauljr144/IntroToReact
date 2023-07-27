import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Form from "./components/Form";
import FormStateExample from "./components/FormStateExample";
import UseRefExample from "./components/UseRefExample";
import ReactFormsExample from "./components/ReactFormsExample";
import UseEffectExample from "./components/UseEffectExample";
import ProductList from "./components/ProductList";
import CleanUpEx from "./components/CleanUpEx";
import UsersWAxios from "./components/UsersWAxios";
import DataFetch from "./components/DataFetch";
import AsyncWait from "./components/AsyncWait";
import CancelFetch from "./components/CancelFetch";
import LoadingIndicator from "./components/LoadingIndicator";
import CreateData from "./components/CreateData";
import DeleteData from "./components/DeleteData";
import Updating from "./components/Updating";




function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = ['Jose', 'Bryan', 'Amir', 'Angelica', 'Valerie', 'Zac', 'Patrick', 'Liz', 'Saul', 'Michelle', 'Mauricio'];

  const handleSelectItem = (item:string) => {
    console.log(item);
  }


  const [viewAlert, setViewAlert] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  // Example of how the DOM is working with React
  let count = 0;
  const  handelAnotherClick = () =>{
    setIsVisible(true);
    count++;
    console.log(isVisible);
    console.log(count);
  }

  // const [firstName, setFirstName] = useState('Jose');
  // const [lastName, setLastName] = useState('Martinez');

  const [isLoading, setIsLoading] = useState(false);

  const [person, setPerson] = useState({
    firstName: 'Jose',
    lastName: 'Martinez'
  })

  // const fullName = `${firstName} ${lastName}`;

const [drink, setDrink] = useState({
  title: 'Americano',
  price: 5,

});

const handleAgainAnotherClick = () => {
  const newDrink = {
    title: drink.title,
    price: 6,
  };
  setDrink(newDrink);
}

// Updating nested objects example
const [customer, setCustomer] = useState({
  name: 'Bryan',
  address:{
    city: 'Manteca',
    zipCode: 95336
  }
})

const handleCustomerClick = () =>{
  // copying the customer and changing
  setCustomer({...customer, address: {...customer.address, zipCode: 94566 }})
}

//Updating Arrays//
const [tags, setTags] = useState(['happy ', 'cheerful ']);

const handleAddClick = () =>{
  //Adding to the array, we use the spread operator to copy the original array and adding the new element
  setTags([...tags, 'exciting ']);
}

const handleRemoveClick = ()=>{
  // Rmoving happy using the filter method
  setTags(tags.filter(tag => tag !== 'happy '));
}

const handleUpdateClick = ()=>{
  // Using the map method to update the array.
  setTags(tags.map(x => x === 'happy ' ? 'happiness ':x))
}

// Updating an Array of Objects
const [bugs, setBugs] = useState([
  {id: 1, title: 'Bug 1', fixed: false},
  {id: 2, title: 'Bug 2', fixed: false},
])

const Bugs = ()=>{
  //using map function to find the id, copy the object and change the object
  setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
  console.log(bugs)
}

const [cartItem, setCartItem] = useState(['Product1', 'Product2']);

  const ref = useRef<HTMLInputElement>(null);
  

  //After render
  useEffect(() => {
    //side effect
    if(ref.current)ref.current.focus();
  }, [])

  useEffect(()=>{
    document.title = 'This is cool'
  })

  const [category, setCategory] = useState('')

  return (
    <div>
      <Updating/>
      <CreateData/>
      <DeleteData/>
      <LoadingIndicator/>
      <CancelFetch/>
      <AsyncWait/>
      <DataFetch/>
      <UsersWAxios/>
      <CleanUpEx/>
       <select onChange={(e) => setCategory(e.target.value)} className='form-select my-5'>
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
        </select>

      <ProductList category={category}/>
      
      <input ref={ref} type="text" className="form-control" />
      <UseEffectExample/>
      <UseRefExample/>

      
      {/* This shows how many item are in the ccart */}
      <NavBar cartItemCout={cartItem.length} />
      <Cart cartItems={cartItem} onClear={()=>setCartItem([])}/>
      <Message/>
      {/* <Message/>
      <Message/> */}
      {person.firstName} {person.lastName}

     <Like onClick={()=>console.log('hola')}/>
      <BsFillCalendarDateFill color="red" size={40}/>
      {/* <Alert>
        Don't Click on Valerie
      </Alert> */}

      {/* This statement allows to show alert and not show it. */}
      {viewAlert === true ? <Alert close={() => setViewAlert(false)}>Test</Alert> : null}
      
      <p>{bugs.map(bug => <p key={bug.id}>{bug.id} {bug.fixed ? 'fixed':'new'}</p>)}</p>
      <Button onClick={Bugs} Color="info">Bug Fixed</Button><span></span>
      <Button onClick={handleAgainAnotherClick} Color="primary">Drink</Button><span>{drink.price}</span>
      <Button onClick={() => setViewAlert(true)} Color="warning">Show Alert</Button>
      <Button onClick={handelAnotherClick} Color="info">Visible</Button><span>{count}</span>
      <Button onClick={handleCustomerClick} Color="info">Customer</Button><span>{customer.address.zipCode}</span>
      <Button onClick={handleAddClick} Color="info">Add Mood</Button><span>{tags}</span>
      <Button onClick={handleRemoveClick} Color="info">Remove Happy</Button><span>{tags}</span>
      <Button onClick={handleUpdateClick} Color="info">Update</Button><span>{tags}</span>

      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
      <ListGroup items={students} heading='Students' onSelectItem={handleSelectItem}/>
      
      <Form/>
      <FormStateExample/>
      <ReactFormsExample/>
    </div>
  
  );
}

export default App;
