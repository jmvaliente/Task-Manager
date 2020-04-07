import React from 'react';
import Login from './components/auth/Login'
import AddUser from './components/auth/AddUser'
import Proyects from './components/proyect/Proyects'
import {Route , Switch} from 'react-router-dom'

import ProyectState from './context/proyects/proyectState'

function App() {
  return (
    <ProyectState>
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route exact path = '/create-user' component={AddUser}/>
        <Route exact path = '/proyects' component={Proyects}/>
      </Switch>
    </ProyectState>
  );
}

export default App;
