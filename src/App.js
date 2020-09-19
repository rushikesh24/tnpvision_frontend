import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Grid } from '@material-ui/core';
import Header from './components/Header';
import BodyContent from './components/BodyContent'


function App() {
  return (
    <div className='App-header'>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
         <BodyContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
