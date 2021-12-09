import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SecondPage from './SecondPage';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/photo.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20px',
        width: '90%',
        marginLeft: '100px',
    },
    appbar: {
        background: 'none',
        // fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '50%',
        margin: '0 auto',
    },
    appbarWrapperNav: {
        width: '69%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarNav: {
        flexGrow: '1',
    },
    icon: {
        color: '#000',
        fontSize: '2rem',
    },
    headerHr: {
        width: '100%',
        marginTop: '0',
    },
    title: {
        width: '300px',
        fontSize: '25px',
        color: '#000',
        marginRight: '300px',
    },
    sizeParagraph: {
        width: '300px',
        fontSize: '18px',
        fontWeight: '380',
        color: '#000',
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <div>
                    <h1 className={classes.title}>We can organize any entertainment just for you</h1><br/>
                    <p className={classes.sizeParagraph}> 
                        Our company can choose the best entertainment for EVERYONE, regardless of age!!! <br /> 
                        All you have to do is call us and say your wishes. <br /> 
                        We will do the rest for you and choose the best entertainment for you! <br />  
                    </p>
                </div>
            </div>
            <SecondPage />
        </div>
        
    );
}
