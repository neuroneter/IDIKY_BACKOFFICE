import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Home } from './content/store/Home'
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
        let objMenuFather = locals.menus.find(obj => obj.module === params.module);
        if(params.layout !== undefined){
            let objMenuChild = objMenuFather.childs.find(obj => obj.module === params.layout);
            return objMenuChild.component;
        }else return objMenuFather.component;
   }

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />    
            <ModuleTmp/>
        </main>
    )
}
