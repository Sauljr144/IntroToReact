
import userService, { User } from '../services/user-service';
import useUsers from '../hooks/useUsers';



const DeleteData = () => {
  const {users, error, isLoading, setUsers, setError} = useUsers();
  
    const deleteUser = (user:User) => {
      const orginalUsers = [...users];
      // Filter will iterate through our users and if the u.id does not equal the user.id we will get a render of new users minus the ones we delete.
      setUsers(users.filter(u => u.id !== user.id))
      userService.delete(user.id)
      .catch(error =>{
        setError(error.message);
        setUsers(orginalUsers);
      })
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