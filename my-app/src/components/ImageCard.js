import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const useStyles = makeStyles({
    root: {
    width: 430,
    background: 'rgba(0,0,0,0.2)',
    margin: '20px',
    paddingBottom: '15px',
    },
    media: {
    height: 440,
    },
    title: {
        fontWeight: '600',
        fontSize: '30px',
        color: '#000',
    },
    paragraph: {
        fontSize: '1.1rem',
        color: '#000',
    },
    fullParagraph: {
        fontSize: '1.1rem',
        color: '#000',
    },
    price: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#000',
    },
});

function ImageCard(props) {
    const classes = useStyles();
    const entertainment = props.entertainment;
    const extended = props.extended
    const url = `/catalog/ItemPage/${entertainment.id}`;

    return (
        <Card className={classes.root}>
            <CardMedia 
            className={classes.media} 
            image={entertainment.imageUrl} 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    { entertainment.title }
                </Typography>
                
                <Typography variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
                    { entertainment.paragraph }
                </Typography> 
                
                {extended ?
                <Typography variant="body2" color="textSecondary" component="p" className={classes.fullParagraph}>
                    { entertainment.fullParagraph }
                </Typography>
                : null}

                <Typography variant="h5" color="textSecondary" component="h2" className={classes.price}>
                    { entertainment.price }
                </Typography>
            </CardContent>
            {!extended ?
            <Link to={ url } >
                <button className="button" onClick={console.log('')}>View more</button>
            </Link>
            : null}
            <button onClick={() =>props.addBasket(entertainment)} className="button" >Add to cart</button>
        </Card>
    );
}

export default connect(null, { addBasket })(ImageCard);