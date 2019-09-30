import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      Hello from App.js <FaHome />
      <Button>Hello styled.components</Button>
    </div>
  );
}

const Button = styled.button`
  color: white;
  background:#f15025;
  font-size: 2rem;
`

export default App;
