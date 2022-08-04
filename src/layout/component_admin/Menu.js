import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/img/logo_compuesto.png'
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

function Menu(props) {

    let history = useHistory();

    const {locals} = useSelector(state => state.locals);
    
    const useStyles = makeStyles((theme) => ({
        drawer: {
          [theme.breakpoints.up('sm')]: {
            width: props.drawerWidth,
            flexShrink: 0,
          },
        },
        // necessary for content to be below app bar
        drawerPaper: {
          width: props.drawerWidth
        },
    }));

    const { window } = props;

    const classes = useStyles();

    const theme = useTheme();

    const clicItem = (menu, position, father) => {
      if(position === 'father' && menu.child !== undefined){
        let domObj = document.getElementById(menu.child);
        (domObj.style.display === 'block')?domObj.style.display = 'none':domObj.style.display = 'block';
      }else{
        history.push(menu.route); 
      }
    }

    function menu(info,position, father){
      return (
        <ListItem key={info.key} button onClick={ clicItem.bind(this,info,position,father ) }>
          <ListItemIcon>{info.icon}</ListItemIcon>
          <ListItemText primary={info.label} />
        </ListItem>
      )
    }

    function buildMenu(objMenu){ 
      //Recorremos todos los objetos del menu
      let value = objMenu.map((objFather) => {
        //Buscamos todos los menus quer correspondan su grupo 
        let allChilds = locals.menus.filter(menu => menu.group === objFather.child);
        //Recorremos los menus que son hijos del menu padre
        let childs = allChilds.map((objChild) => {
          return menu(objChild,'child', objFather.module);
        });
        //Creamos la estructura que envuelve a los items del menu Padre y los menus hijo
        return (<div key={objFather.key}>
                  {menu(objFather,'father', null)}
                  <div id={objFather.child} style={{display: 'none'}}>{childs}</div>
                </div>);
      });
      return (<List>{value}</List>);
    }

    const drawer = (
        <div className="Menu">
            <img id="logo" src={logo} alt="idiky Logo"  />
              <Divider/>{buildMenu( locals.menus.filter( menu => menu.group === "menu1" ))}
        </div>
    );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            //onClose={props.handleDrawerToggle.bind(this)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
    </nav>
  );
}

Menu.propTypes = {
  window: PropTypes.func,
};

export default Menu;
