import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withRouter} from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles, Grid, Box} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button:{
		marginLeft: '15px',
		height: 'auto',
		marginTop : '6px',
		marginBottom: 'auto',
    },
}));

function FormDialog(props) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog maxWidth='md' fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
              <Grid container>
                  <Grid item xs={false} sm={11}>
                      Visualization
                  </Grid>
                  <Grid item xs={12} sm={1}>
                      <CancelIcon color="primary" fontSize="large" onClick={handleClose}/>
                  </Grid> 
              </Grid>     
        </DialogTitle>
        <Box border= {1} borderColor= "grey.500" margin= '20px' borderRadius= '5px'>
        <DialogContent>
            {props.children}
        </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}

export default withRouter(FormDialog)