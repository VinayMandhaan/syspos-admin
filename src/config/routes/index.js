// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import AppRoutes from './approutes/approutes'


// const Navigations = React.memo((props) => {
//     return (
//         <Router>
//             <AppRoutes />
//         </Router>
//     );
// })


// export default Navigations

// import React, { useState } from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import AccountPopover from './drawer-components/popover'
// import SidebarContent from './drawer-components/sidebar-content'
// import '../../styles/routes/app.css'
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         boxShadow: "none",
//         borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         flexDirection: "row",
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 30,
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//     },
//     drawerOpen: {
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         padding: "6px 20px"

//     },
//     drawerClose: {
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         overflowX: 'hidden',
//         width: theme.spacing(7) + 1,
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9) + 1,
//         },
//     },
//     toolbar: {
//         display: 'flex',
//         alignItems: 'center',
//         // justifyContent: 'flex-end',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         background: theme.palette.tertiary.main,
//         height: "100vh"
//     },
//     logo: {
//         width: 140,
//     },
//     acountBox: {
//         display: "flex",
//         alignItems: "center",
//         marginRight: 30,

//     }
// }));

// export default function Navigations() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(true);

//     const handleDrawerToggle = () => {
//         setOpen(!open);
//     };

//     return (
//         <div className={clsx(classes.root, 'appContainer')}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}
//                 color={'primary'}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerToggle}
//                         edge="start"
//                         className={clsx(classes.menuButton)}
//                     >
//                         <MenuIcon />
//                     </IconButton>

//                 </Toolbar>
//                 <div className={clsx(classes.acountBox, 'accountBox')}>
//                     <AccountPopover />
//                     <Avatar alt="Me" src={require('../../assets/images/dp.jpg')} />
//                 </div>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 className={clsx(classes.drawer, {
//                     [classes.drawerOpen]: open,
//                     [classes.drawerClose]: !open,
//                 })}
//                 classes={{
//                     paper: clsx({
//                         [classes.drawerOpen]: open,
//                         [classes.drawerClose]: !open,
//                     }),
//                 }}
//             >
//                 <div className={classes.toolbar}>
//                     <img src={require('../../assets/images/logo.png')} className={clsx(classes.logo)} />
//                 </div>
//                 <SidebarContent />
//             </Drawer>
//             <main className={classes.content}>
//                 <div className={classes.toolbar} />

//             </main>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
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
import AccountPopover from './drawer-components/popover'
import SidebarContent from './drawer-components/sidebar-content'
import '../../styles/routes/app.css'
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AppRoutes from './approutes/approutes'
import { useSelector } from 'react-redux'

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // background: theme.palette.tertiary.main,

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        padding: "6px 20px",
    },
    drawerPaperWithoutScroll: {
        width: drawerWidth,
        padding: "6px 20px",
        overflow: "hidden"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        // height: "100vh"
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    logo: {
        width: 140,
        margin: 12
    },
    acountBox: {
        display: "flex",
        alignItems: "center",
        marginRight: 30,

    }
}));

export default function Navigations() {
    const classes = useStyles();
    const theme = useTheme();
    const user = useSelector((state)=>state.user.user)

    const [open, setOpen] = React.useState(true);
    const [drawerScroll, setDrawerScroll] = React.useState(false);


    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    return (
        <Router>
            {user && <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            edge="start"
                            className={clsx(classes.menuButton)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={require('../../assets/images/logo.png')} className={clsx(classes.logo, open && classes.hide, 'logo')} />
                    </Toolbar>
                    <div className={clsx(classes.acountBox, 'accountBox')}>
                        <AccountPopover />
                        <Avatar alt="Me" src={require('../../assets/images/dp.jpg')} />
                    </div>
                </AppBar>
                <Drawer
                    className={clsx(classes.drawer)}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: drawerScroll ? classes.drawerPaper : classes.drawerPaperWithoutScroll,

                    }}
                    onMouseOver={() => { setDrawerScroll(true) }}
                    onMouseLeave={() => { setDrawerScroll(false) }}
                >
                    <div className={classes.toolbar}>
                        <img src={require('../../assets/images/logo.png')} className={clsx(classes.logo)} />
                    </div>
                    <SidebarContent />
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <AppRoutes />

                </main>
            </div>}
            {!user && <AppRoutes />}
        </Router>
    );
}