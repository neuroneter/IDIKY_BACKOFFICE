import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const MobilMenu = ({handleProfileMenuOpen, handleMobileMenuOpen, handleMobileMenuClose, isMobileMenuOpen, mobileMoreAnchorEl}) => {
    const useStyles = makeStyles((theme) => ({
        sectionMobile: {
          display: 'flex',
          [theme.breakpoints.up('md')]: {
            display: 'none',
          },
        },
        mobilMenu:{
            '& p':{
                height: 'auto',
                margin: 0,
                position: 'sticky',
                top: '50%',
                msTransform: 'translateY(-50%)',
                transform: 'translateY(-50%)'
            }
        }
      }));

    const classes = useStyles();
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            className={classes.mobilMenu}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose.bind(this)}
        >
        <MenuItem >
            <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Mensajes</p>
        </MenuItem>
        <MenuItem >
            <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notificaciones</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen.bind(this)}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Perfil</p>
        </MenuItem>
        </Menu>
    );


    return (
        <div>
        <div className={classes.sectionMobile}>
            <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen.bind(this)}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </div>
            {renderMobileMenu}
        </div>
       
    )
}
