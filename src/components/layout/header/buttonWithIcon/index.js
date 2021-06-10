import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
    root: {
        textDecoration: 'none',
        textAlign: 'center',
        color: theme.palette.color.main,
        lineHeight: '100%',
        transition: '.15s ease all',
        '@media (max-width: 1024px)': {
            display: 'none',
        },
        '&:hover': {
            color: theme.palette.color.accentSecondary,
            '& img': {
                transform: 'translateY(-4px)',
            },
        },
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4,
        transition: '.15s ease all',
        '@media(max-width: 1024px)': {
            width: 24,
        },
    },
    text: {
        '@media(max-width: 1024px)': {
            fontSize: 12,
        },
    },
}));

export default function ButtonWithIcon({ name, img, alt, link }) {

    const classes = useStyles();

    return (
        <Link to={`/${link}`} className={classes.root}>
            <img src={img} alt={alt} className={classes.img} />
            <span className={classes.text}>{name}</span>
        </Link>
    );
};