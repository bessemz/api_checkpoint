import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profil() {
  const [users, setUsers] = useState([]);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, []);

  console.log(users);

  return (
    <>
      {users.map(user => (
        <Card key={user.id} style={{ width: '18rem', height: '25rem' }}>
        <Card.Img variant="top" src="https://www.eng.chula.ac.th/wp-content/uploads/2016/11/profile-pic.jpeg" />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.company.name}</Card.Text>
          </div>
          <Button variant="primary" onClick={() => handleDelete(user.id)}>Delete</Button>
        </Card.Body>
      </Card>
      
      
      ))}
    </>
  );
}

export default Profil;
