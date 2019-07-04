import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       <Sidebar/>
       <Main/>
       </Router>
    </div>
  );
}

export default App;
