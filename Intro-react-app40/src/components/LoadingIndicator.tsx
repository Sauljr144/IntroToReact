

import useUsers from "../hooks/useUsers";

interface User {
  id: number;
  name: string;
}

const LoadingIndicator = () => {
  const {users, error, isLoading, setUsers, setError} = useUsers();

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
