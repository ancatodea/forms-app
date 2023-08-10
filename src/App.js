import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {

  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setApiUsers(data))
  },[])

  return (
    <div className="App">
      <AddUser />
      <UserList users={apiUsers}/>
    </div>
  );
}

export default App;
