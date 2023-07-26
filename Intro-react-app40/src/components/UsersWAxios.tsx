import React, { useEffect, useState } from 'react'
import axios from 'axios'

//interface to 
interface User{
    id: number,
    name: string
}

const UsersWAxios = () => {

    // setting up the type of our useState to our interface as an array
    const [users, setUsers] = useState<User[]>([])

    // handeling our error
    const [error, setError] = useState('')

    // function to fetch data
    const FetchData = () =>{
        //using axios to fetch the data
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => setError(error.message)) //setting our setUser to the response.data
    }

    // using a useEffect
    useEffect(() => {
        //Passing in our FetchData fucntion
        FetchData();

    }, [])

  return (
    <div>
        Fetching Data With Axios
        <ul>
            {/* mapping through our users. Li tag needs a key which is the id of the user. Displaying the name of the user inside */}
            {users.map(user => <li key={user.id}>{user.name}</li>)}

            {/* Displaying the error */}
            {error && <p className='text-danger'>{error}</p>}
        </ul>
    </div>
  )
}

export default UsersWAxios