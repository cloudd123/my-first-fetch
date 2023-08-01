import  { useEffect, useState } from 'react';
import UserCard from '../components/UserCard'; 

function AnotherComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/users';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setUsers(data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>USERS</h1>
      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default AnotherComponent;

