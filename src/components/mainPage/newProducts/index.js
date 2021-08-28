import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ScrollBar from '../../scrollBar';
import CardProduct from '../../scrollBar/productsScrollBar/cardProduct';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 80,
        overflowX: 'visible',
    },
    h3: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: '100%',
        '@media (max-width: 1025px)': {
            fontSize: 28,
        },
        '@media (max-width: 767px)': {
            fontSize: 20,
        },
    },
    title: {
        width: '100%',
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    catalog: {
        background: theme.palette.background.secondary,
        borderRadius: 12,
        border: 'none',
        padding: '8px 12px',
        fontSize: 14,
        color: theme.palette.color.accentSecondary,
        lineHeight: '100%',
        cursor: 'pointer',
    },
    advantages: {
        display: 'flex',
        overflowX: 'visible',
    },
    product: {
        marginRight: 12,
    },
}));

/**
 * Слайдер новинки
 * @module src/components/mainPage/newProducts
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default function NewProducts(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h3" component="h1" className={classes.h3}>
                    Новинки
                </Typography>
            </div>
            <div className={classes.advantages}>
                <ScrollBar buttonNext fullScreen>
                    {props.data.allPrismicMainPage.edges[0].node.data.new.map((product, i) => (
                        <div key={`hot ${i}`} className={classes.product}>
                            <CardProduct product={product.new_product.document} />
                        </div>
                    ))}
                </ScrollBar>
            </div>
        </div>
    );
};