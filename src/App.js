
import React from 'react';
import {  Route ,Routes} from 'react-router-dom';



import AppNavbar from "./components/AppNavbar";
import SignupPage from "./components/Signup";
import Dashboard from './components/Dashboard';
import LoginForm from './components/Login';

function App() {
  return (
  <>
<div>
 HELLO NAVBAR IS HERE
</div>
  <AppNavbar/>
    <Routes>
      <Route path='/login'
      element={<LoginForm/>}>
      </Route>
      <Route path='/signup'
      element={<SignupPage/>}>
      </Route>
      <Route path='/dashboard'
      element={<Dashboard/>}>
      </Route>
    </Routes>
  
  </>
  );
}

export default App;
