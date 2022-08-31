import React from 'react'
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router'

export const Title = () => {
    
    let params = useParams();

    const { locals } = useSelector(state => state.locals);
    //buscamos dentro del objeto cual es el layout actual para encontrar el titulo 
    let title = locals.title;

    if(params.module !== undefined){
        
        let objMenuFather = locals.menus.find(obj => obj.module === params.module);
        title = objMenuFather.title;

        if(params.layout !== undefined){
            let objMenuChild = objMenuFather.childs.find(obj => obj.module === params.layout);
            title = title+" / "+objMenuChild.title;
        }
            
    }   

    return (
        <Typography variant="h6" noWrap>
            {    
               title
            }
        </Typography>
    )
}
