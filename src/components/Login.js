import React from 'react';
import {Dialog, DialogTitle, DialogActions, DialogContent, TextField, DialogContentText, Button} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ForgotPassword from './ForgotPassword'

const useStyles = makeStyles((theme) => ({
    textField:{
        margin: theme.spacing(2),
        alignSelf: 'center'
    },
    button:{
		marginLeft: '15px',
		height: 'auto',
		marginTop : '6px',
		marginBottom: 'auto',
    },
}));

function Login(){ 

    const classes = useStyles();

    const [loginOpen, setLoginOpen] = React.useState(false);

    const handleLoginOpen = () => {
        setLoginOpen(true);
    };

    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    return(
        <div>
            <Button className={classes.button} variant='outlined' color='secondary' onClick={handleLoginOpen}>Login</Button>
            <Dialog open={loginOpen} onClose={handleLoginClose} maxWidth='xl'>
                <DialogTitle>Login</DialogTitle>
	        	    <Box border= {1} borderColor= "grey.500" margin= '10px' borderRadius= '5px'>
	        		    <DialogContent>
	        		        <TextField
	        				    autoFocus
	        				    margin="dense"
	        					id="email"
	        					label="Email Address"
	        					type="email"
	        					variant="outlined"
	        					fullWidth
	        					required
	        				/>
	        				<TextField
	        				    autoFocus
	        				    margin="dense"
	        				    id="password"
	        				    label="Password"
	        				    type="password"
	        				    variant="outlined"
	        				    fullWidth
	        				    required
	        				/>
	        				<DialogContentText >
	        					<ForgotPassword />
	        				</DialogContentText>
	        				</DialogContent>
	        		</Box>
	        		<DialogActions className={classes.textField}>
	        		    <Button onClick={handleLoginClose} color="primary" variant='outlined'>
	        		        Cancel
	        		    </Button>
	        		    <Button onClick={handleLoginClose} color="primary" variant='outlined'>
	        		        Login
	        		    </Button>
	        		</DialogActions>
	        	</Dialog>
        </div>
    );
}

export default Login;