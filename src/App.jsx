import { useState } from 'react';
import './App.css';
import DeepCopy from './DeepCopy';

function App() {
  const [user, setUser] = useState({
    name: 'John',
    profession: 'Developer',
    address: {
      city: 'Portland',
    },
  });

  const onChangeName = (e) => {
    const newUser = {
      ...user,
      name: e.target.value,
    };
    setUser(newUser);
  };

  const onCityChange = (e) => {
    const newUser = {
      ...user,
      address: {
        ...user.address,
        city: e.target.value,
      },
    };
    setUser(newUser);
  };

  return (
    <>
      <b>By reference</b>
      <div>
        <input type="text" value={user.name} onChange={onChangeName} />
        <input type="text" value={user.address.city} onChange={onCityChange} />
        <div>{user.name}</div>
        <div>{user.profession}</div>
        <div>{user.address.city}</div>
      </div>
      ----------------------------------------------
      <div>
        <b>By Deep Copy</b>
        <DeepCopy />
      </div>
    </>
  );
}

export default App;
