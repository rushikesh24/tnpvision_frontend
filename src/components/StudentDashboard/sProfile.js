import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Tabs, Tab, Avatar, Card, Box, CardContent, Typography} from '@material-ui/core';
import passport from '../../static/images/passport.jpeg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  avatar: {
    height: '100%',
    width: '100%',
    backgroundColor:'#ffffff'
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justify='center' spacing={2}>
      <Grid item xs={false} sm={3} >
        <Card>
          <CardContent>
          <Box alignItems='center' display='flex' flexDirection='column'>
              <Avatar alt="Remy Sharp" src={passport} className={classes.Avatar} />
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                Mayur Nagare
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Manmad, India
              </Typography>
          </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={false} sm={9}>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Personal Data" style={{fontWeight:'bold'}} />
        <Tab label="Academics Data" style={{fontWeight:'bold'}} />
        {/* <Tab label="Item Three" style={{fontWeight:'bold'}} /> */}
      </Tabs>
    </Paper>
    </Grid>
    </Grid>
  );
}

