import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import Login from './Components/Login/Login';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Events from './Components/Events/Events';
import AdminPanel from './Components/AdminPanel/AdminPanel';
export const UserContext = createContext()
function App() {
  const [user, setUser] = useState({ isSignedUp: true })

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/registration-form'>
            <RegistrationForm />
          </PrivateRoute>
          <PrivateRoute path='/events'>
            <Events />
          </PrivateRoute>
          <PrivateRoute path='/admin-panel'>
            <AdminPanel />
          </PrivateRoute>
          <Route path='*'>
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
