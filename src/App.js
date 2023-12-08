import logo from './logo.svg';
import './App.css';
import Countercomp from './components/Countercomp';
import Navbar from './components/Navbar';
import {auth,provider} from "./config";
import { signInWithPopup } from 'firebase/auth';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect,useState } from 'react';

function App() {
  const [logedin, setlogedin] = useState(false)
  const [value,setValue] = useState(null)

  const handelLoginClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
    })    
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  return (
    <div className="App">
      
      <header className="App-header">
        <Router>
        <div className='Changetheme'>
            <a href="/" >Worktime</a>
            <a href="/break">Breaktime</a>
          </div>    
          <Routes>
           
           <Route exact path="/" element={<Countercomp breaktime={25}/>}></Route>
           
           <Route exact path="/break" element={<Countercomp breaktime={5}/>}></Route>
           
            
          </Routes>
          <div className='loginbuttonclass'>
            <h3>Login to add your tasks</h3><button onClick={handelLoginClick}>{value===null?`Login with Google`:`Logout`}</button><div className='taskdiv'>Task Here</div>
          </div>

        </Router>
      </header>
    </div>
  );
}

export default App;
