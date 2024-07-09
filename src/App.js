import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';

import Accueil from "./Pages/Accueil";
import AdminCard from "./Pages/AdminCard";
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';

import NavBar from "./Components/NavBar"

import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <main className="App contenu">
            <div className="menu"><NavBar /></div>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/admin-card" element={<AdminCard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
