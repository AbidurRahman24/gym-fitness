import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import headerImg from '../../../img/header-img.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="container header-background">
                <div style={{height:'600px'}} className="row d-flex align-items-center">
                    <div className="col-md-6 col-sm-12" >
                        <h1>CHALLANGE <br />   <span> YOUR FITNESS</span> </h1>
                        <div className={classes.root}>
                        <Button variant="contained" color="primary">
                            READ MORE
                        </Button>
                        </div>
                    </div>
                    <div style={{}}  className="col-md-6 col-sm-12">
                        <img src={headerImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;