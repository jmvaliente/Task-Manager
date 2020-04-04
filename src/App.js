import React from 'react';
import Login from './components/auth/Login'
import AddUser from './components/auth/AddUser'
import Proyects from './components/proyect/Proyects'
import {Route , Switch} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route exact path = '/create-user' component={AddUser}/>
        <Route exact path = '/proyects' component={Proyects}/>
      </Switch>
  );
}

export default App;
