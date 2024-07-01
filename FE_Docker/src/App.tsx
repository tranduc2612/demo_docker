import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [users,setUsers] = useState<User[]>([])
  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(function (response) {
        // handle success
        setUsers(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  },[])
  return (
    <>
      <ul className=''>
          {users.map((user) => (
            <li key={user.id}>username: {user.name}<br/>password:{user.password}</li>

            
          ))}
      </ul>
    </>
  )
}

export default App
