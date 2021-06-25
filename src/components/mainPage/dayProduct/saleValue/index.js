import React from 'react';
import { makeStyles, Typography, withTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(180deg, #0094FF 0%, #FF00F5 100%)',
        borderRadius: '40px 12px 40px 40px',
        width: 80,
        height: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        '& h5': {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '90%',
        },
        '& h6': {
            fontSize: 28,
            fontWeight: 700,
            lineHeight: '100%',
        },
    },
}));

export default function SaleValue(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">{props.value}%</Typography>
            <Typography variant="h5">скидка</Typography>
        </div>
    ); 
};