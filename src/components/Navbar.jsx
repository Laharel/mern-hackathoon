import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import { Link, NavLink, } from 'react-router-dom';
import AuthService from '../services/auth.service'
import { useState, useEffect } from "react";
import PersonIcon from '@material-ui/icons/Person';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import add_user from './static/add_user.png'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
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
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        // background: "#2E3B55",
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        // background: "#2E3B55",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        
        const user = AuthService.getCurrentUser();

        if(user){
            setCurrentUser(user)
        }
    }, [])

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () =>{
        AuthService.logout()
        // props.history.push("/signin")
        // window.location.reload();
        window.location.href = '/signin';


    }

    return (
        <div className={classes.root}>
            <AppBar
                style={{ background: '#2E3B55' }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className="top-navbar">
                    <span className="nav-span1">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            <NavLink to="/" className="logo">
                                Nerds With Attitude
                            </NavLink>
                        </Typography>
                    </span>

                    <span className="nav-span2">
                        {currentUser && (
                            <NavLink className="nav-link button" to="#" onClick={handleLogout}>
                            Logout
                            </NavLink>
                        )}
                    </span>

                </Toolbar>
                
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <NavLink to="/" className="sidebar-link">
                        {['Home'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    { <HomeIcon />}
                                    </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </NavLink> 
                    {currentUser ? (
                    <NavLink to="#" className="sidebar-link">
                    {['My Account'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                { <PersonIcon />}
                                </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </NavLink> 
                    ):
                    <NavLink to="/signin" className="sidebar-link">
                    {['Sign In'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                { <ExitToAppIcon />}
                                </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </NavLink> 
                    }
                        {currentUser && (
                        <NavLink to="#" className="sidebar-link">
                        {['Create Course'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    { <AddBoxIcon/>}
                                    </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        </NavLink>
                        )} 
                </List>
                <List>  
                    {!currentUser && (
                        <NavLink to="/signup" className="sidebar-link">
                    {['Sign Up'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                            <img src={add_user} width='25px' />
                                </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </NavLink>
                    )} 
                </List>
                <Divider />
                <List>
                    {['Contact Us'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                { <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
