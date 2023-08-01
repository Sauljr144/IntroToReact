
import userService, { User } from '../services/user-service';
import useUsers from '../hooks/useUsers';




const Updating = () => {
  const {users, error, isLoading, setUsers, setError} = useUsers();
  
 

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