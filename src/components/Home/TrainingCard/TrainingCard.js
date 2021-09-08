import React from 'react';
import './TrainingCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 300,
        padding: 10,
        backgroundColor: '#29282D',
        color:'#FFFFFF'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const TrainingCard = ({ training }) => {
    const { title, mainTittle, img, description, footerText } = training
    const classes = useStyles();
    return (
        <div className='col-md-3 py-2 '>
            {
                training.img ? <img className='zoom' style={{ width: '100%', height: '300px' }} src={img} alt="" /> :
                    <div className="d-flex align-items-center">
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography class={'pt-3'} variant="h3" component="h2" className={classes.title}  gutterBottom>
                                    {title}
                                </Typography>
                                <Typography class={'py-2'}  variant="h5" component="h2">
                                    {mainTittle}
                                </Typography>
                                <Typography class={'py-2'} className={classes.pos} >
                                    {description}
                                </Typography>
                                <Typography   className={classes.pos} >
                                    {footerText}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
            }
        </div>
    );
};

export default TrainingCard;