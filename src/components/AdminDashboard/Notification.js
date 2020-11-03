import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Box, Typography, Badge, Card, CardHeader, Divider, Grid  } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <Badge badgeContent={4} color="secondary">
            <NotificationsIcon onClick={handleClick} />
        </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card style= {{width: '400px'}}>
            <CardHeader title='Notification'/>
            <Divider/>
            <Box style={{backgroundColor: '#eeeeee'}} margin='15px' >
                <Grid container>
                    <Grid item xs={2} sm={2} style={{textAlign: 'end', alignSelf: 'center' }}><LoyaltyIcon/></Grid>
                    <Grid item xs={10} sm={10}>
                        <Typography className={classes.typography}>The content of the Popover.</Typography>
                        
                    </Grid>                
            </Grid>
            </Box>
        </Card>
      </Popover>
    </div>
  );
}


export default Notification