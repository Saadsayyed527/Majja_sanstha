// src/Components/Home/Home.jsx

import React from 'react';
import { Link  } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Link to="/profile">
        <button>View Profile</button>
      </Link>
    </div>
  );
};

export default Home;
