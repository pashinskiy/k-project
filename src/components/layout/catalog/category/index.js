import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Arrow from '../../../../../static/svg/arrowGray.svg';
import { navigate } from 'gatsby';

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

/**
 * Кнопка категории в каталоге 
 * @module src/components/layout/catalog/category
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.svg - путь до иконки
 * @param {String} props.alt - альтернативный текст
 * @param {String} props.name - текст заголовка
 * @param {function} props.setHover - функция вызываемая при наведении на кнопку и уходе с нее
 * @param {String} props.uid - уникальный идентификатор категории полученый из prismic
 */
export default function Category({ svg, alt, name, setHover, uid }) {

    const classes = useStyles();

    return (
        <button
            className={classes.root}
            onClick={() => {navigate(`/category/${uid}`)}} 
            onMouseEnter={() => {
                setHover(name);
            }}
            onMouseLeave={() => {
                setHover(name);
            }}>

            <img src={svg} alt={alt ?? "img"} />
            <Typography variant="h3">
                {name}
            </Typography>
            <Arrow />

        </button>
    );
};