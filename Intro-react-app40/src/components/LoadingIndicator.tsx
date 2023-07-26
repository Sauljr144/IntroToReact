import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const LoadingIndicator = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  // use state for our loading indicator
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // set it to true in our useEffect before fetching data
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      //   setting logic in our response
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false); //once getting data back it sets it to false
      }) 
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false); //if there's an error it is set to fals
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      Loading Indicator
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {error && <p className="text-danger">{error}</p>}
        {/* A spinner from bootstrap displays if isLoading is true */}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </div>
  );
};

export default LoadingIndicator;
