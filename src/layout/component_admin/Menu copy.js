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

    const clicItem = (layout) => {
      //Verificamos si existe id de copropiedad y se puede realizar un reemplazo de ide en la url de layout
      if(props.params.idCoownership !== null) layout = layout.replace(':id', props.params.idCoownership)
      history.push(layout); 
    }

    function buildMenu(obj){ 
      let value = obj.map((info) => (
        <ListItem button key={info.key} onClick={clicItem.bind(this,info.layout)}>
            <ListItemIcon>
              {info.icon}
            </ListItemIcon>
            <ListItemText primary={info.label} />
        </ListItem>
      ));
      return (<List>{value}</List>);
    }

    const drawer = (
        <div className="Menu">
            <img id="logo" src={logo} alt="idiky Logo"  />
              <Divider/>{buildMenu( locals.menus.filter( menu => menu.group === "menu1" ))}
              {
                (props.params.idCoownership !== null)
                &&  <div>
                      <Divider/> {buildMenu( locals.menus.filter( menu => menu.group === "menu2" ))}
                      <Divider/>{buildMenu( locals.menus.filter( menu => menu.group === "menu3" ))}
                    </div>
              }
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
