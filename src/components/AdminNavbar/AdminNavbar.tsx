import React from 'react';
import { Theme, makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Avatar, IconButton, Badge } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles(() => ({
    adminNavbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #e3ebf6",
        borderBottom: "1px solid #e3ebf6",
        padding: "1.5rem",
    },
    avatar: {
        backgroundColor: "red",
    }
}));

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }),
)(Badge);

const AdminNavbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.adminNavbar}>
            <IconButton aria-label="alert" >
                <NotificationsNoneOutlinedIcon />
            </IconButton>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar aria-label="recipe" className={classes.avatar} src="https://lh3.googleusercontent.com/proxy/4DhOMpaByUAu42u5WsUGi8jCENpMVuT0uFBxZcQy0-r8Cow2lINb6oBxpMxDlX9IN61AyarmszPBxtN_OFQB9qktWuElfCTB-ZXKSFm7cMPRfMF3cu1sujo">
                    R
                </Avatar>
            </StyledBadge>
            <IconButton aria-label="search">
                <SearchOutlinedIcon />
            </IconButton>
        </div>
    )
};

export default AdminNavbar;