import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Arrow from '../../../../../static/svg/arrowGray.svg';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'none',
        border: 'none',
        width: 260,
        padding: 10,
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.color.secondary,
        transition: '.15s ease all',
        borderRadius: 8,
        '& img': {
            marginRight: 8,
        },
        '& svg': {
            marginLeft: 8,
        },
        '& h3': {
            fontSize: 14,
            flex: 1,
            textAlign: 'left',
            lineHeight: '150%',
        },
        '&:hover': {
            background: theme.palette.background.secondary,
        },
    },
}));

export default function Category({ svg, alt, name, setHover }) {

    const classes = useStyles();

    return (
        <button
            className={classes.root} 
            onMouseEnter={() => {
                setHover(name);
            }}
            onMouseLeave={() => {
                setHover(name);
            }}>

            <img src={svg} alt={alt} />
            <Typography variant="h3">
                {name}
            </Typography>
            <Arrow />

        </button>
    );
};