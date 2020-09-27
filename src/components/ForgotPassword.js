import React from 'react';
import {Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button, Link} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField:{
        margin: theme.spacing(2),
        alignSelf: 'center'
    }
}));

function Login(){ 

    const classes = useStyles();

    //const [loginOpen, setLoginOpen] = React.useState(false);
    // const [registerOpen, setRegisterOpen] = React.useState(false);
    const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);

	const handleForgotPasswordOpen = () => {
        setForgotPasswordOpen(true);
	};
	const handleForgotPasswordClose = () => {
		setForgotPasswordOpen(false);
	};

    return(
        <div>
            <Link onClick={handleForgotPasswordOpen}>
	        	Forgot Password
	        </Link>
            <Dialog open={forgotPasswordOpen} onClose={handleForgotPasswordClose} maxWidth='xl' >
                <DialogTitle>Forgot Password</DialogTitle>
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
	        				</DialogContent>
	        		</Box>
	        		<DialogActions className={classes.textField}>
	        		    <Button onClick={handleForgotPasswordClose} color="primary" variant='outlined'>
	        		        Back
	        		    </Button>
	        		    <Button onClick={handleForgotPasswordClose} color="primary" variant='outlined'>
	        		        Send Mail
	        		    </Button>
	        		</DialogActions>
	        	</Dialog>
        </div>
    );
}

export default Login;