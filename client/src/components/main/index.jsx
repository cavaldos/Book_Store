import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    header: {
        backgroundColor: '#fff',
        height: '64px',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
    sidebar: {
        backgroundColor: '#f0f0f0',
        height: '100vh',
        minWidth: '200px',
        padding: theme.spacing(2),
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: '64px',
        left: 0,
    },
    content: {
        marginLeft: '200px',
        padding: theme.spacing(2),
    },
}));

const DefaultLayout = ({ children }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleSidebarToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open sidebar"
                    onClick={handleSidebarToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <h1>Book Store</h1>
                </Link>
            </div>
            <Grid container>
                <Grid
                    item
                    className={classes.sidebar}
                    xs={12}
                    sm={3}
                    md={2}
                    lg={2}
                >
                    <ul>
                        <li>
                            <Link to="/">
                                <HomeIcon />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/books">
                                <BookIcon />
                                <span>Books</span>
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid
                    item
                    className={classes.content}
                    xs={12}
                    sm={9}
                    md={10}
                    lg={10}
                >
                    {children}
                </Grid>
            </Grid>
        </div>
    );
};

export default DefaultLayout;
