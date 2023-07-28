
import React, { useEffect, useState } from 'react'
import APIClient, {CanceledError} from '../services/API-Client';
import userService from '../services/user-service';


interface User {
    id: number;
    name: string;
  }

const Updating = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setIsLoading(true);
      const { request, cancel } = userService.getAll<User>();
    request
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });
  
      return () => cancel();
    }, []);
  
  // Adding user
    const addUser = () =>{
      const orginalUsers = [...users]
      const newUser = {id: 0, name: 'Bryan'};
      //setting setUser by adding the newUser variable to a new array with the users spread in the array
      setUsers([newUser,...users]);
      // adding our data to our endpoint
      APIClient.post("/users",newUser)
      .then(({data: savedUser}) => setUsers([savedUser, ...users])) //becomes permanent and we spread our users
      .catch(error =>{
        setError(error.message);
        setUsers(orginalUsers);
      });
    };

    // updating the users
    const updateUser =(user:User)=>{
        const orginalUsers = [...users]
        const updatedUser = {...user, name: user.name + '!'};
        setUsers(users.map(u => u.id === user.id ? updatedUser : u))
        userService.update(updatedUser)
        .catch(error =>{
            setError(error.message)
            setUsers(orginalUsers)
        })
    }
  
    return (
      <div className="mb-5">
        Updating Data
      <button className="btn btn-outline-primary mx-3 my-3" onClick={addUser}>Add</button>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item d-flex justify-content-between">{user.name} <button className="btn btn-outline-secondary" onClick={()=> updateUser(user)}>Update</button></li>
          ))}
          {error && <p className="text-danger">{error}</p>}
          {isLoading && <div className="spinner-border"></div>}
        </ul>
      </div>
    );
}

export default Updating