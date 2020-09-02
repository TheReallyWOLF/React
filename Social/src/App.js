import React from 'react'; // подключение модуля
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


const App = () => { // App вставляется в index.js
  return (
    <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}

export default App;