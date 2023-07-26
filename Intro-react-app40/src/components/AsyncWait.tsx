import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

//interface to
interface User {
  id: number;
  name: string;
}

const AsyncWait = () => {  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  // async older version
  const FetchData = async () => {

    try{
      const response =  await axios
      .get("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    }
    catch(error){
        // Axios error
       setError((error as AxiosError).message)
    }
  
    
  };


  useEffect(() => {

    FetchData();
  }, []);

  return (
    <div>
      Async and Await
      <ul>
      
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}

        {error && <p className="text-danger">{error}</p>}
      </ul>
    </div>
  );
};

export default AsyncWait;
