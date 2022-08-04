import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Menu from './component_admin/Menu'
import TopToolBar from './component_admin/TopToolBar'
import {Content} from './component_admin/Content'

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

  let params = useParams();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <TopToolBar global={props.params} />
      </AppBar>
      <Menu  params={params} drawerWidth={drawerWidth} global={props.params} />
      <Content drawerWidth={drawerWidth} params={params} global={props.params} />
    </div>
  );
}

Admin.propTypes = {
  window: PropTypes.func,
};

export default Admin;