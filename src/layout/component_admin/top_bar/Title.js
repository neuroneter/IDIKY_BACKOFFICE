import React from 'react'
import Typography from '@material-ui/core/Typography';

export const Title = ({params}) => {
    
    //buscamos dentro del objeto cual es el layout actual para encontrar el titulo 
    const title = params.locals.titles.find(titles => titles.layout === params.layout);

    return (
        <Typography variant="h6" noWrap>
            {    
                (params.idCoownership !== null)
                && params.coownership.name
            }
            {    
                (params.idCoownership === null)
                && title.title
            }
        </Typography>
    )
}
