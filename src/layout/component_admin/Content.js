import React, {useState, useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Board } from './content/Board'
console.disableYellowBox = true;


export const Content = ({drawerWidth, params}) => {
    
    
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

    const [module, setModule] = useState(<div>Loading</div>);
    
   useEffect(() => {
      const load = async () => {
        const Modules = (await import("./content/store/Brands")).default;
        setModule(<Modules params = {params}/>);
      }; 
      load();
   }, [params.layout]);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {
              (params.layout === 'board' || params.layout === undefined)
              &&<Board params={params}/>
            }
            <Fragment >{module}</Fragment>
            
        </main>
    )
}
