import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import BusinessIcon from '@material-ui/icons/Business';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, useTheme, Paper, Badge, Container } from '@material-ui/core';
import { withRouter, Route } from 'react-router-dom';
import Profile from './sProfile';
import Acad from './academicsData'
import graphic from '../../static/images/graphic-designer.svg';
import Notification from '../AdminDashboard/Notification'
//DarkThemeMode
import { useChangeTheme } from '../../DarkModeTheme/ThemeProvider';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  icon:{
    marginLeft: '10px',
    marginRight: '10px',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flex: '1 1 auto',
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

}));

function AdminDashboard(props) {
  
  const classes = useStyles();

  const theme = useTheme();
  const changeTheme = useChangeTheme();
  const { history} = props;
  const mainListItems =[
    {   
        text : 'Dashboard',
        icon: <DashboardIcon />,
        onClick: () => history.push("/student/dashboard"),
    },  
    {   
        text : 'Companies',
        icon: <BusinessIcon />,
        onClick: () => history.push("/student/companies"),
    },  
    {   
        text : 'Attendance',
        icon: <HowToRegIcon />,
        onClick: () => history.push("/student/attendance"),
    },
    // {
    //     text : 'Notification',
    //     icon: <Badge badgeContent={4} color="secondary">
    //             <NotificationsIcon />
    //         </Badge>,
    //     onClick: () => history.push("/student/notification"),
    // },
  ]
  const secondaryListItems =[
    {
        text : 'Settings',
        icon: <SettingsIcon />,
        onClick: () => history.push("/student/setting"),
    },
  ]


  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            TnPVision
          </Typography>
          <Notification/>
          <IconButton title="Toggle light/dark mode" className={classes.icon} style={{color: 'white'}} onClick={()=>changeTheme()}>
							{theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
					</IconButton>
              <Avatar alt="Remy Sharp" src={graphic} style={{backgroundColor:'#ffffff'}} onClick={() => history.push("/student/profile")} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainListItems.map((item, index) =>{
            const { text, icon, onClick } = item;
            return(
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {secondaryListItems.map((item, index) =>{
            const { text, icon, onClick } = item;
            return(
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
          <Paper style={{height: 'auto', width: '100%'}} elevation={0}>
            <Container maxWidth='lg' className={classes.container}>
              {/* <Route path="/student/dashboard" component={Dashboard} /> */}
              <Route path="/student/profile" component={Profile} />
              {/* <Route path="/student/empapprove" component={EmpApproval} /> */}
              <Route path="/student/acad" component={Acad} />
            </Container>
          </Paper>
      </main>
    </div>
  );
}

export default withRouter(AdminDashboard);