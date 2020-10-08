import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, useTheme, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, ListItemAvatar, Badge, Container, Paper } from '@material-ui/core';
import { withRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import AdminProfile from './Profile';
import EmpApproval from './employeeApproval';
import graphic from '../../static/images/graphic-designer.svg';
//DarkThemeMode
import { useChangeTheme } from '../../DarkModeTheme';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  icon:{
    marginRight: '10px'
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
  },

}));

function AdminDashboard(props) {
  
  const classes = useStyles();

  const theme = useTheme();
  const changeTheme = useChangeTheme();
  const { history } = props;
  const mainListItems =[
    {
      text : 'Dashboard',
      icon: <DashboardIcon />,
      onClick: () => history.push("/admin/dashboard"),
    },
    {
      text : 'Companies',
      icon: <BusinessIcon />,
      onClick: () => history.push("/admin/profile"),
    },
    {
      text : 'Student Data',
      icon: <PeopleIcon />
    },
    {
      text : 'Job Post',
      icon: <PostAddIcon />
    },
    {
      text : 'Notification',
      icon: <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
            </Badge>
    },
  ]
  const secondaryListItems =[
    {
      text : 'Analytics',
      icon: <BarChartIcon />
    },
    {
      text : 'Report',
      icon: <AssignmentIcon />
    },
  ]
  
  const ternaryListItems =[
    {
      text : 'Settings',
      icon: <SettingsIcon />
    },
    {
      text : 'Employee Approval',
      icon: <PeopleIcon />,
      onClick: () => history.push("/admin/empapprove"),
    },
    {
      text : 'User Management',
      icon: <SupervisedUserCircleIcon />
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
          <IconButton title="Toggle light/dark mode" className={classes.icon} style={{color: 'white'}} onClick={()=>changeTheme()}>
									{theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
					</IconButton>
          <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={graphic} style={{backgroundColor:'#ffffff'}} onClick={() => history.push("/admin/profile")}></Avatar>
            </ListItemAvatar>
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
        <Divider />
        <List>
          {ternaryListItems.map((item, index) =>{
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
        <Paper style={{height: '91.5vh', width: '100%'}} elevation='0'>
          <Container maxWidth='lg' className={classes.container}>
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/profile" component={AdminProfile} />
            <Route path="/admin/empapprove" component={EmpApproval} />
          </Container>
          </Paper>
      </main>

    </div>
  );
}

export default withRouter(AdminDashboard);