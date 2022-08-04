import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Board } from './content/Board'
import { useParams } from 'react-router'
import {useSelector} from 'react-redux';

console.disableYellowBox = true;

export const Content = ({drawerWidth}) => {
    
    
    let params = useParams();
    const { locals } = useSelector(state => state.locals);
    
    const useStyles = makeStyles((theme) => ({
      
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
          width: drawerWidth
        },
        
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
        },
    }));

    const classes = useStyles();

   const ModuleTmp = () => {
      if(params.layout !== undefined){
        const module = locals.menus.find(obj => obj.module === params.layout);
        return module.component;
      }else return <Board/>
      
   }

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />    
            <ModuleTmp/>
        </main>
    )
}

//<Fragment >{module}</Fragment>