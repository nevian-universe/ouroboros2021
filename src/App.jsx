import './App.css';
import React from 'react'
import Routes from './Routes';
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App-content">
      
    < Header />
        <Routes />
    <Footer />

    </div>
  );
}

export default App;