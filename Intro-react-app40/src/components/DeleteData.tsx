
import React, { useEffect, useState } from 'react'
import APIClient, {CanceledError} from '../services/API-Client';

interface User {
    id: number;
    name: string;
  }

const DeleteData = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setIsLoading(true);
      APIClient
        .get<User[]>("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        })
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    const deleteUser = (user:User) => {
      // Filter will iterate through our users and if the u.id does not equal the user.id we will get a render of new users minus the ones we delete.
      setUsers(users.filter(u => u.id !== user.id))
    }
  
    return (
      <div>
        Delete Data
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item d-flex justify-content-between">{user.name} <button className="btn btn-outline-danger" onClick={()=>deleteUser(user)}>Delete</button></li>
          ))}
          
          {error && <p className="text-danger">{error}</p>}
          {isLoading && <div className="spinner-border"></div>}
        </ul>
      </div>
    );
}

export default DeleteData