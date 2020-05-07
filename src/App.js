import React from 'react';
import Login from './components/auth/Login'
import AddUser from './components/auth/AddUser'
import Proyects from './components/proyect/Proyects'
import {Route , Switch} from 'react-router-dom'

import ProyectState from './context/proyects/proyectState'
import TaskState from './context/tasks/taskState'
import AlertState from './context/alerts/alertState'
import AuthState from './context/auth/authState'

function App() {
  return (
    <ProyectState>
      <TaskState>
        <AuthState>
          <AlertState>
            <Switch>
              <Route exact path = '/' component={Login}/>
              <Route exact path = '/create-user' component={AddUser}/>
              <Route exact path = '/proyects' component={Proyects}/>
            </Switch>
          </AlertState>
        </AuthState>
      </TaskState>
    </ProyectState>
  );
}

export default App;
