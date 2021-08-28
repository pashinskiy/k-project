import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 120,
        height: 45,
        background: theme.palette.color.accent,
        color: 'white',
        fontSize: 14,
        cursor: 'pointer',
        border: 'none',
        transition: '.15s ease all',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: props =>
            (props.animation === true)
            ? '12px 12px 0px 0px'
            : 12
        ,
        '@media (max-width: 1025px)': {
            width: 40,
            height: 40,
            borderRadius: '100% !important',
        },
        '&:hover': {
            transform: 'scale(1.05)',
            '@media (max-width: 1025px)': {
                transform: 'scale(1.1)',
            },
        },
    },
    img: {
        display: 'block',
        width: 12,
        height: 12,
    },
    text: {
        marginLeft: 10,
        '@media (max-width: 1025px)': {
            display: 'none',
        },
    },
}));

/**
 * Кнопка открытия/закрытия каталога
 * @module src/components/layout/header/catalog
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 * @param {boolean} props.catalog - состояние каталога, true = открыт
 * @param {function} props.setCatalog - функция установки состояния каталога 
 * @param {boolean} props.animation - true - анимация открытия, false - анимация закрытия
 * @param {function} props.setAnimation - функция изменения анимации
 */
export default function CatalogButton({ data, setCatalog, catalog, setAnimation, animation }) {

    const classes = useStyles({ animation });

    function openCatalog() {
        setCatalog(true)
        setAnimation(true);
        setTimeout(()=>document.addEventListener("click", closeCatalog), 0)    
    } 
    function closeCatalog(e) {
        const flagInCatalog = e.target.closest("#catalog") !== null
        const flagInLink = e.target.closest("a") !== null
        const flagInButton = e.target.closest("button") !== null

        if (flagInCatalog && !flagInLink && !flagInButton) return
        setTimeout(()=>setCatalog(false), 300)
        setAnimation(false);
        document.removeEventListener("click", closeCatalog)
    }

    return (
        <button
            className={`${classes.root} catalog`}
            onClick={() => {
                if (catalog === false) {
                    openCatalog()
                }
            }}>
            <img
                src={data.allPrismicHeader.edges[0]?.node.data.catalog_img.localFile?.publicURL + `#${(catalog === true) ? 'Cross' : 'Burger'}`}
                alt={data.allPrismicHeader.edges[0]?.node.data.catalog_img.alt ?? "img"}
                className={classes.img} />
            <span className={classes.text}>{data.allPrismicHeader.edges[0]?.node.data.catalog_name.text}</span>
        </button>
    );
};