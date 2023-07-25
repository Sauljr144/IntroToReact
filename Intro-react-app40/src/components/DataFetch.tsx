import React, { useEffect, useState } from 'react'


let url = 'https://jsonplaceholder.typicode.com/users';

interface User{
    id: number,
    name:string
}

const DataFetch = () => {

const [users, setUsers] = useState<User[]>([])

const MyData = () => {
    fetch(url)
        .then(response => response.json())
            .then(data => setUsers(data))
}

useEffect(() => {

    MyData()

}, [])


  return (
    <div>
        My Data
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default DataFetch