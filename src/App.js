import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/users/usersSlice';


function App() {
  const {users,isLoading,error} = useSelector((state)=>state.users)
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchUsers())

  },[dispatch])
  if(isLoading){
    <div>
      <p>Loading...</p>
    </div>
  }
  if(error){
    <div>
      <p>
      error:{error}
      </p>
    </div>
  }
  const userItems = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    userItems.push(
      <li key={user.login.uuid}>
        {user.name.first}   {user.name.last}
      </li>
    );
  }

  return (
    <div className="App">
     <ul>
      {userItems}
     </ul>
    </div>
  );
}

export default App;
