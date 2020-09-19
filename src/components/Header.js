import React from 'react'
import './header.css'
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// For Overriding the deafult theme
const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
    }
  });
  
//Customize functions
const useStyles = makeStyles(() => ({
    typography:{
        flex: 1
    },
    button:{
        padding: '0 30px',
        margin: 25,
        height: 36,
    }
}));
const Header = () => {
    
    const classes = useStyles();
    
    return (
        //Nav Bar
        <AppBar className='header' color='white'>
            <Toolbar>
                <Typography variant='h4' className= {classes.typography}>
                    TnpVision
                </Typography>
                <MuiThemeProvider theme={theme}>
                    <Button className={classes.button} color='primary' variant='contained'>Login</Button>
                    <Button color='primary' variant='contained'>Register</Button>
                </MuiThemeProvider>
            </Toolbar>
        </AppBar>
    )
}

export default Header
