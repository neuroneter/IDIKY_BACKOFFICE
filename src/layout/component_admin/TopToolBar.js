import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Title} from './top_bar/Title';
import {Email} from './top_bar/Email';
import {Alert} from './top_bar/Alert';
import {Acount} from './top_bar/Account';
import {MobilMenu} from './top_bar/MobilMenu';

export default function TopToolBar({handleDrawerToggle, params}) {

      const useStyles = makeStyles((theme) => ({
        grow: {
          flexGrow: 1,
        },

        menuButton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
        },
      
        sectionDesktop: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'flex',
          },
        }

      }));

      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
 
    return (
        <div className={classes.grow}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle.bind(this)}
                >
                    <MenuIcon />
                </IconButton>
                <Title params={params}/>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <Email/>
                    <Alert/>
                    <Acount handleProfileMenuOpen={handleProfileMenuOpen.bind(this)} handleMenuClose={handleMenuClose.bind(this)} isMobileMenuOpen={isMobileMenuOpen} isMenuOpen={isMenuOpen} anchorEl={anchorEl} />  
                </div>
                {
                <MobilMenu handleProfileMenuOpen={handleProfileMenuOpen.bind(this)} handleMobileMenuOpen={handleMobileMenuOpen.bind(this)} handleMobileMenuClose={handleMobileMenuClose.bind(this)} isMobileMenuOpen={isMobileMenuOpen} mobileMoreAnchorEl={mobileMoreAnchorEl} />
            }
            
            </Toolbar>
        </div>
    );
}