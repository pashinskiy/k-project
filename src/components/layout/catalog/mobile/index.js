import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import '../catalog.css';
import CardWidget from '../../../widgets/cardWidget';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: 'fit-content',
        minHeight: 760,
        zIndex: 1000,
        background: theme.palette.color.mainContrast,
        borderRadius: '0px 0px 40px 40px',
        display: 'flex',
        justifyContent: 'center',
        top: 100,
        left: 0,
        '@media (max-width: 1024px)': {
            top: 70,
        },
        animationName: props => (props.animation === true)
            ? 'catalog_in'
            : 'catalog_out',
        animationDuration: '.15s',
        animationTimingFunction: 'ease-out',
        animationFillMode: 'forwards',
    },
    root_container: {
        padding: 28,
        boxSizing: 'border-box',
        maxWidth: 1280,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    container: {
        display: 'flex',
        height: 'fit-content',
    },
    catalog: {
        width: 'fit-content',
        marginRight: 12,
        '& h2': {
            marginBottom: 28,
            fontSize: 17,
            fontWeight: 600,
        },
    },
    divider: {
        height: 'auto',
    },
    categories_brands: {
        display: 'flex',
    },
    category: {
        padding: 28,
        boxSizing: 'border-box',
        '& h3': {
            fontSize: 36,
            fontWeight: 600,
        },
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            marginRight: 12,
        },
    },
    sub_categories: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: 528,
        height: 'fit-content',
    },
    sub_category: {
        marginTop: 28,
        width: 'calc(50% - 14px)',
        height: 'fit-content',
        '& h4': {
            fontSize: 17,
            fontWeight: 600,
            marginBottom: 20,
        },
        '& a': {
            marginLeft: 0,
            marginTop: 12,
            fontSize: 14,
            '&:first-child': {
                marginTop: 0,
            },
        },
    },
    promo: {
        display: 'flex',
        flexDirection: 'column',
        '& img': {
            borderRadius: 12,
            width: 240,
            height: 340,
            marginBottom: 12,
        },
    },
    brand_wrapper: {
        padding: 12,
        width: 84,
        height: 84,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        objectFit: 'fit',
        background: theme.palette.background.secondary,
        borderRadius: 12,
        marginTop: 8,
        '&:first-child': {
            marginTop: 28,
        },
        '& img': {
            width: '100%',
            height: 'auto',
        },
    },
}));

export default function MobileCatalog({ data, animation }) {

    const classes = useStyles({ animation });

    return (
        <div className={classes.root}>
            <div className={classes.root_container}>
                <div className={classes.container}>
                    <div className={classes.catalog}>
                        <Typography variant="h2">{data.allPrismicCatalog.edges[0].node.data.catalog_name.text}</Typography>
                        <nav className={classes.menu}>
                            {data.allPrismicCatalog.edges[0].node.data.categories.map((category, i) => (
                                <CardWidget
                                    variant={"category"}
                                    key={`category ${i}`}
                                    cardImage={category.category.document.data.category_icon.localFile.publicURL + '#fill'}
                                    cardTitle={category.category.document.data.name}
                                    cardLink={""}  />
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};