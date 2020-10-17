import React, { Component } from "react";
import clsx from "clsx";
import {
    useTheme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MyListItem from './components/nav/MyListeItem';
import Logo from './components/nav/Logo';
import {
    DashboardIcon,
    TalentIcon,
    ProjectsIcon,
    PackagesIcon,
    MessagingIcon,
    AuditionsIcon,
    ScheduleIcon,
    ContactsIcon,
    WebsiteIcon,
    ExpandIcon,
    CollapseIcon,
} from './components/icon';
import Talent from './components/talent';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Hidden from '@material-ui/core/Hidden';
import { useStyles } from './App.style';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function App() {
    const classes = useStyles();
    const theme = useTheme();
    const screenLarge = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [drawerCollapse, setDrawerCollapse] = React.useState(!screenLarge);
    const [currentCollapseState, setCurrentCollapseState] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerCollapse = () => {
        setDrawerCollapse(!drawerCollapse);
    };

    const handleNavItemHover = (over: boolean) => {
        if (over) {
            if (drawerCollapse) {
                setCurrentCollapseState(drawerCollapse);
                setDrawerCollapse(false);
            }
        } else {
            setDrawerCollapse(currentCollapseState);
        }
    };
    
    const myDrawer = (<div>
        <div className={classes.drawerHeader}>
            <Logo />
        </div>
        <List className={classes.menuList}
            onMouseEnter={() => handleNavItemHover(true)}
            onMouseLeave={() => handleNavItemHover(false)}>
            <MyListItem button key={'Dashboard'} selected={true} >
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary={'Dashboard'} />
            </MyListItem>
            <MyListItem button key={'Talent'}>
                <ListItemIcon><TalentIcon /></ListItemIcon>
                <ListItemText primary={'Talent'} />
            </MyListItem>
            <MyListItem button key={'Projects'}>
                <ListItemIcon><ProjectsIcon /></ListItemIcon>
                <ListItemText primary={'Projects'} />
            </MyListItem>
            <MyListItem button key={'Packages'}>
                <ListItemIcon><PackagesIcon /></ListItemIcon>
                <ListItemText primary={'Packages'} />
            </MyListItem>
            <MyListItem button key={'Messaging'}>
                <ListItemIcon><MessagingIcon /></ListItemIcon>
                <ListItemText primary={'Messaging'} />
            </MyListItem>
            <MyListItem button key={'Auditions'}>
                <ListItemIcon><AuditionsIcon /></ListItemIcon>
                <ListItemText primary={'Auditions'} />
            </MyListItem>
            <MyListItem button key={'Schedule'}>
                <ListItemIcon><ScheduleIcon /></ListItemIcon>
                <ListItemText primary={'Schedule'} />
            </MyListItem>
            <MyListItem button key={'Contacts'}>
                <ListItemIcon><ContactsIcon /></ListItemIcon>
                <ListItemText primary={'Contacts'} />
            </MyListItem>
            <MyListItem button key={'Website'}>
                <ListItemIcon><WebsiteIcon /></ListItemIcon>
                <ListItemText primary={'Website'} />
            </MyListItem>
        </List>
        <div className={clsx(classes.collapseContainer, {
            [classes.collapseContainerSmall]: drawerCollapse
        })}>
            <IconButton onClick={handleDrawerCollapse}>
                {drawerCollapse ?
                    <ExpandIcon width="48" height="48"
                        viewBox="0 0 48 48" style={{ width: 48, height: 48 }}
                        className={classes.collapseButton} /> :
                    <CollapseIcon width="48" height="48"
                        viewBox="0 0 48 48" style={{ width: 48, height: 48 }}
                        className={classes.collapseButton} />
                }
            </IconButton>
        </div>
    </div>);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: !drawerCollapse
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        className={clsx(classes.menuButton, {
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {myDrawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: !drawerCollapse,
                        [classes.drawerClose]: drawerCollapse
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: !drawerCollapse,
                            [classes.drawerClose]: drawerCollapse
                        })
                    }}
                >
                    {myDrawer}
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Talent />
            </main>
        </div>
    );
}



