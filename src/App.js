import React from 'react';
import ThemeProvider from './DarkModeTheme/ThemeProvider';
import { CssBaseline } from '@material-ui/core'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import aBoard from './components/AdminDashboard/ABoard';
import sBoard from './components/StudentDashboard/SBoard';
import StudentRegistration from './components/Register/StudentRegistrationForm';
import FacultyRegistration from './components/Register/FacultyRegistrationForm';
import TPORegistration from './components/Register/TPORegistrationForm';

function App() {

  //render={(props) => <Login {...props}

  return (
    <ThemeProvider>
      <CssBaseline />
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/admin" component={aBoard} />
            <Route path="/student" component={sBoard} />
            <Route exact path ="/StudentRegistration" render ={props => < StudentRegistration {...props}/>}/>
            <Route exact path ="/FacultyRegistration" render ={props => < FacultyRegistration {...props}/>}/>
            <Route exact path ="/TPORegistration" render ={props => < TPORegistration {...props}/>}/>
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

