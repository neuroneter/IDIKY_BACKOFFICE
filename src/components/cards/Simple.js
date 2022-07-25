import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));

export const Simple = (props)=> {

  const { loading = false } = props;
  const classes = useStyles();

  const card = (
        <Card className={classes.card} >
            <CardHeader
            avatar={
                loading ? (
                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                ) : (
                <Avatar
                    alt={props.coownership.name}
                    src={props.coownership.picture[0].url}
                />
                )
            }
            
            title={
                loading ? (
                <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                ) : (
                props.coownership.name
                )
            }
            />
            {loading ? (
            <Skeleton animation="wave" variant="rect" className={classes.media} />
            ) : (
            <CardMedia
                className={classes.media}
                image={(props.coownership.picture.length > 1)?props.coownership.picture[1].url:props.coownership.picture[0].url}
                title={props.coownership.name}
            />
            )}
        </Card>
    )

    return (
        <div>
            {card}
        </div>
    );
}