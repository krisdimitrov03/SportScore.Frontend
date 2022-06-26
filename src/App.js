import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async (email, password) => {
      const userFromServer = await fetchUser(email, password);
      
      if (userFromServer) {
        setUser(userFromServer);
      } else {
        setUser({});
      }
    }

    getUser('petar-oborev@gmail.com', 'Petyo@29')
    // getUser('wrong@email', 'wrong_pass')
  }, [])
  //Fetch User
  const fetchUser = async (email, password) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-Auth-Token-x': '9dc97af7-5b7e-466b-9fc1-1ca2873bc4'
      },
      body: JSON.stringify({ email, password })
    }

    const res = await fetch('https://localhost:7111/user/login', options);
    const data = await res.json();

    return data.data;
  }

  return (
    <div className="App">
      <Header user={user} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
