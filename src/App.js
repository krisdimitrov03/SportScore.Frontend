import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { useState } from 'react';

let user = { id: "32d32"};


function App() {
  // const userState = useState(user);
  return (
    <div className="App">
      <Header user={user} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
