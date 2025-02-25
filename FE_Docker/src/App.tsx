import axios from 'axios';
import { useEffect, useState } from 'react'

interface Req{
  username: string,
  password: string
}

function App() {
  const [users,setUsers] = useState<User[]>([]);
  const [value,setValue] = useState<Req>({
    username: "",
    password: ""
  });
  useEffect(() => {
    handleFetchUser();
  },[])

  function handleFetchUser(){
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
  }

  function onCreateUser(){
    axios.post('http://localhost:3000/user',value)
      .then(function () {
        setUsers([
          ...users,
          {
            id: 1,
            name: value.username,
            password: value.password
          }
        ])
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {

      });
  }

  return (
    <>
    <span>username</span>
    <input type="text" value={value.username} onChange={(e)=>setValue({
      ...value,
      username: e.target.value
    })}/>

    <span>password</span>
    <input type="text" value={value.password} onChange={(e)=>setValue({
      ...value,
      password: e.target.value
    })}/>
      <button onClick={onCreateUser}>Create</button>
      <ul className=''>
          {users.map((user) => (
            <li key={user.id}>username: {user.name}<br/>password:{user.password}</li>
          ))}
      </ul>
    </>
  )
}

export default App
