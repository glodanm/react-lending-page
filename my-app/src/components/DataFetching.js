import React, { useState } from 'react'
import ImageCard from './ImageCard';
import entertainmentsCatalog from '../static/entertainmentsCatalog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function DataFetching({entertainments}) {

    const [data] = useState(entertainmentsCatalog);
    const classes = useStyles();

    return (
        <div>
            <ul>
                {
                    <div className={classes.root}>
                        {entertainments.map(entertainment => (<ImageCard extended={false} entertainment={ entertainment }/>))}
                        {data.length === 0 && <span>No records found to display!</span>}
                    </div>
                }
            </ul>
        </div>
    )
}

export default DataFetching