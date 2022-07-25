import React from 'react'
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

export const Acount = ({handleProfileMenuOpen, handleMenuClose, isMenuOpen, anchorEl}) => {

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose.bind(this)}
        >
            <MenuItem onClick={handleMenuClose.bind(this)}>Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose.bind(this)}>Unidades</MenuItem>
            <MenuItem onClick={handleMenuClose.bind(this)}>Cerrar</MenuItem>
        </Menu>
    );

    return (
        <div>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen.bind(this)}
                color="inherit"
                >
                <AccountCircle />
            </IconButton>
            {renderMenu}
        </div>
    )
}
