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
        '@media (max-width: 1024px)': {
            width: 40,
            height: 40,
            borderRadius: '100% !important',
        },
        '&:hover': {
            transform: 'scale(1.05)',
            '@media (max-width: 1024px)': {
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
        '@media (max-width: 1024px)': {
            display: 'none',
        },
    },
}));

export default function CatalogButton({ data, setCatalog, catalog, setAnimation, animation }) {

    const classes = useStyles({ animation });

    return (
        <button
            className={`${classes.root} catalog`}
            onClick={() => {
                if (catalog === true) {setTimeout(()=>{ setCatalog(!catalog); },150)} else { setCatalog(!catalog); };
                setAnimation(!animation);
            }}>
            <img
                src={data.allPrismicHeader.edges[0].node.data.catalog_img.localFile.publicURL + `#${(catalog === true) ? 'Cross' : 'Burger'}`}
                alt={data.allPrismicHeader.edges[0].node.data.catalog_img.alt}
                className={classes.img} />
            <span className={classes.text}>{data.allPrismicHeader.edges[0].node.data.catalog_name.text}</span>
        </button>
    );
};