import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
    root: {
        width: 171,
        height: 23,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        textDecoration: 'none',
        padding: 0,
        cursor: 'pointer',
        fontSize: 12,
        color: theme.palette.color.mainContrast,
        '& .header--sales--text': {
            transform: 'translate(-2.5px, -2.5px)',
            transition: '.15s ease all',
        },
        '&:hover':{
            '& .header--sales--text': {
                transform: 'translate(0px, 0px)',
            },
            '& .back_filled': {
                transform: 'translate(0px, 0px) skewX(14deg)',
            },
            '& .back_outlined': {
                transform: 'translate(0px, 0px) skewX(14deg)',
            },
        }
    },
    wrapper_filled: {
        position: 'absolute',
        width: 171,
        height: 23,
        zIndex: -1,
    },
    wrapper_outlined: {
        position: 'absolute',
        width: 171,
        height: 23,
        zIndex: -2,
    },
    back_filled: {
        background: theme.palette.color.accent,
        width: '100%',
        height: '100%',
        borderRadius: '4px 6px 4px 6px',
        transform: 'translate(-2.5px, -2.5px) skewX(14deg)',
        transition: '.15s ease all',
    },
    back_outlined: {
        boxSizing: 'border-box',
        border: `2px solid ${theme.palette.color.accentSecondary}`,
        width: '100%',
        height: '100%',
        borderRadius: '4px 6px 4px 6px',
        transform: 'translate(2.5px, 2.5px) skewX(14deg)',
        transition: '.15s ease all',
    },
}));

export default function SaleButton({ name, link }) {

    const classes = useStyles();

    return (
        <Link to={link} className={classes.root}>
            <span className={'header--sales--text'}>{name}</span>
            <div className={classes.wrapper_filled}>
                <div className={`${classes.back_filled} back_filled`} />
            </div>
            <div className={classes.wrapper_outlined}>
                <div className={`${classes.back_outlined} back_outlined`} />
            </div>
        </Link>
    );
};