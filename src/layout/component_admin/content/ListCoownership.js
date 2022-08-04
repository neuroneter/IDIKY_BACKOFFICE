import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Simple} from '../../../components/cards/Simple'
import { useHistory } from "react-router-dom";
import {Colors} from '../../../stores/data/Colors'
import {useSelector} from 'react-redux';

export const ListCoownership = ({params}) => {

    const {locals} = useSelector(state => state.locals);

    const useStyles = makeStyles((theme) => ({
        coownership:{
            '&:hover':{
                '&>div>div':{
                    backgroundColor:Colors.celeste
                }
            }
        }
    }));

    const classes = useStyles();
    let history = useHistory();
    const clicItem = (id) => { history.push("/admin/board/"+id); }

    return (
        <div >
            <h5 className="text-center">{locals.titleCoownerShip}</h5>
            {
                params.coownerships.map( coo => (
                    <div key={coo.id} className={classes.coownership} onClick={clicItem.bind(this,coo.id)} style={{cursor: 'pointer'}}>
                        <Simple coownership={coo} />
                    </div>
                ))
            }
        </div>
    )
}
