import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '30px',
        height: '13vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        fontFamily:'Dongle',
        fontSize: '3vw',
        flexGrow: '1',
        color: '#8B0000',
    },
    iconInst: {
        color:'#000',

    },
    iconFacebook: {
        color:'#000',
    },
    iconTwitter: {
        marginRight:'2rem',
        color:'#000',
        
    },
})); 

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Container>
                    <Toolbar>
                        <h1 className={classes.appbarTitle}>
                            Entertainment-Co
                        </h1>
                        <IconButton>
                            <InstagramIcon className={classes.iconInst} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon className={classes.iconFacebook} />
                        </IconButton>
                        <IconButton >
                            <TwitterIcon className={classes.iconTwitter} />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
