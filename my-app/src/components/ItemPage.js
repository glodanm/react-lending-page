import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import entertainmentsCatalog from '../static/entertainmentsCatalog';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}));
export default function ItemPage() {
    const classes = useStyles();

    const { id } = useParams();

    return (
        <div className={classes.root}>
            <ImageCard extended={ true } entertainment={entertainmentsCatalog[id-1]} />
        </div>
    );
}
