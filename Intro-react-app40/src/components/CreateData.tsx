
import userService from "../services/user-service";
import useUsers from "../hooks/useUsers";



const CreateData = () => {
  // using our custom hook
 const {users, error, isLoading, setUsers, setError} = useUsers();

  // Adding user
  const addUser = () => {
    const orginalUsers = [...users];
    const newUser = { id: 0, name: "Bryan" };
    //setting setUser by adding the newUser variable to a new array with the users spread in the array
    setUsers([newUser, ...users]);
    // adding our data to our endpoint
   userService.create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users])) //becomes permanent and we spread our users
      .catch((error) => {
        setError(error.message);
        setUsers(orginalUsers);
      });
  };

  return (
    <div className="mb-5">
      Create Data
      <button className="btn btn-outline-primary mx-3 my-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}{" "}
          </li>
        ))}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </div>
  );
};

export default CreateData;
