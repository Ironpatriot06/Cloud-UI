import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Collab.css';

function Collaborate() {
  const [users, setUsers] = useState(['admin']);
  const navigate = useNavigate();

  const addUser = () => {
    const name = prompt('Enter username to add:');
    if (name) setUsers([...users, name]);
  };

  return (
    <div className="collab-box">
      <h2>Collaborators</h2>
      <ul>
        {users.map((user, idx) => <li key={idx}>{user}</li>)}
      </ul>
      <button onClick={addUser}>Add Collaborator</button>
      <div className="back-home-btn-container">
        <button className="back-home-btn" onClick={() => navigate('/home')}>
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
}

export default Collaborate;
