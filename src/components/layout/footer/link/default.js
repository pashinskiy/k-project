import React from 'react';
import { makeStyles } from '@material-ui/styles';

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

/**
 * Компонент ссылки на сторонний источник
 * @module src/components/layout/footer/link/default
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.name - текст ссылки
 * @param {String} props.link - ссылка
 */
export default function DefaultA({ name, link }) {
    
    function contactId(link){
        if (link.includes("tel")){
            return "phone"
        }
        if (link.includes("mailto")){
            return "mail"
        }
    }

    const classes = useStyles();

    return (
        <a id={contactId(link)} href={`${link}`} target="_blank" rel="noopener noreferrer" className={classes.root}>
            {name}
        </a>
    );
};