import React from 'react';
import ThemeProvider from './DarkModeTheme';
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import aBoard from './components/AdminDashboard/ABoard';
import sBoard from './components/StudentDashboard/SBoard'
import Register from './components/Register'

function App() {

  //render={(props) => <Login {...props}
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary:{
        main: '#1976d2'
      },
      secondary:{
        main: '#FFFFFF'
      }
    }
  });

  return (
    <ThemeProvider>
      <CssBaseline />
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component={Register}   />
            <Route path="/admin" component={aBoard} />
            <Route path="/student" component={sBoard} />
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

