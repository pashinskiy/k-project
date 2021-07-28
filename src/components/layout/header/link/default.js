import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: 'fit-content',
        background: 'none',
        border: 'none',
        textDecoration: 'none',
        padding: 0,
        marginLeft: 24,
        cursor: 'pointer',
        fontSize: 12,
        color: theme.palette.color.secondary,
        transition: '.15s ease all',
        '&:hover': {
            color: theme.palette.color.accentSecondary,
        },
    },
}));

export default function DefaultLink({ name, link }) {

    const classes = useStyles();

    return (
        <Link to={link} className={classes.root}>
            {name}
        </Link>
    );
};