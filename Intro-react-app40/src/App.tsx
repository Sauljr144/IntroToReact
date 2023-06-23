import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import Like from "./components/Like";



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




  return (
    <div>
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
      
      <Button onClick={handleAgainAnotherClick} Color="primary">Drink</Button><span>{drink.price}</span>
      <Button onClick={() => setViewAlert(true)} Color="warning">Show Alert</Button>
      <Button onClick={handelAnotherClick} Color="info">Visible</Button><span>{count}</span>
      <Button onClick={handleCustomerClick} Color="info">Customer</Button><span>{customer.address.zipCode}</span>

      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
      <ListGroup items={students} heading='Students' onSelectItem={handleSelectItem}/>
    </div>
  
  );
}

export default App;
