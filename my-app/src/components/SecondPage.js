import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import entertainments from '../static/entertainments';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '117vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(3);

    const loadMore = () => {
        setVisible(visible + 3)
    }

    const renderingCard = (entertainment) =>{
        return(
            <div>
                <ImageCard extended={ true } entertainment={entertainment}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {entertainments.slice(0, visible).map(entertainment => renderingCard(entertainment))}
            {visible < entertainments.length && (
                <button className="buttonSecondPage" onClick={ loadMore }>View more</button>
            )}
        </div>
    );
}
