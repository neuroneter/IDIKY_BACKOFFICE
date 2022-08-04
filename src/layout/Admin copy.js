import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './component_admin/Menu';
import TopToolBar from './component_admin/TopToolBar';
import {Content} from './component_admin/Content';
import { useSelector } from 'react-redux';
import {Coownership} from '../stores/data/Coownership'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },

  appBar: {
    backgroundColor:'#004c6f',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
  },

}));

function Admin(props) {

  let localsState = useSelector(state => state.locals);
  let params = useParams();
  params.locals = localsState.locals;

  useEffect(() => {
    params.locals = localsState.locals //Cargamos el listado de idiomas
  });

  let CownershipNew = [];

  //De acuerdo a la copropiedad seleccionada se organiza el listado de copropiedades colocando la seleccionada de primera
  Coownership.forEach(coo => {
    if(coo.id === params.subLayout) CownershipNew.unshift(coo);
    else CownershipNew.push(coo);
  });
/**
  params.coownerships = CownershipNew;
  if(params.subLayout === undefined){
    params.subLayout = null; //Si no se tiene seleccionado una coopropiedad se colocal null para ser mostrado el tablero general
  }else{
    const coo = Coownership.find( CooVal => CooVal.id === params.subLayout );
    params.coownership = {
        id:coo.id, 
        picture:coo.picture, 
        name:coo.name
    }
  }
   */
  
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen);}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <TopToolBar handleDrawerToggle={handleDrawerToggle.bind(this)} params={params} global={props.params} />
      </AppBar>
      <Menu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle.bind(this)} params={params} drawerWidth={drawerWidth} global={props.params} />
      <Content drawerWidth={drawerWidth} params={params} global={props.params} />
    </div>
  );
}

Admin.propTypes = {
  window: PropTypes.func,
};

export default Admin;