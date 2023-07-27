
import React, { useEffect, useState } from "react";
import APIClient, {CanceledError} from '../services/API-Client';

//interface to
interface User {
  id: number;
  name: string;
}

const CancelFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  
useEffect(() => {
      // Browser function to abort fetch
      const controller = new AbortController();
      // passing in the signal from Axios
      APIClient
        .get<User[]>("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        })
        .then(response => setUsers(response.data))
        .catch(error => {
          if(error instanceof CanceledError) return;
          setError(error.message);
        });
      
        return () => controller.abort();
  }, []);

  return (
    <div>
        Cancel Fetch
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {error && <p className="text-danger">{error}</p>}
      </ul>
    </div>
  );
};

export default CancelFetch;
