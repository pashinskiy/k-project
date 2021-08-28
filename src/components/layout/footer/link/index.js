import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'fit-content',
        fontSize: 12,
        color: 'white',
        marginRight: 20,
        textDecoration: 'none',
        '@media (max-width: 1025px)': {
            color: theme.palette.color.main,
        },
    },
}));

/**
 * Компонент ссылки на сторонний источник белым текстом
 * @module src/components/layout/footer/link
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.name - текст ссылки
 * @param {String} props.link - ссылка
 */
export default function WhiteLink({ name, link }) {

    const classes = useStyles();

    return (
        <a href={`${link}`} target="_blank" rel="noopener noreferrer" className={classes.root}>
            {name}
        </a>
    );
};