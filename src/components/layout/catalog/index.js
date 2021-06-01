import React from 'react';
import { makeStyles, Divider, Typography } from '@material-ui/core';
import Category from './category';
import './catalog.css';

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
    },
    sub_category: {
        marginTop: 28,
        width: 'calc(50% - 14px)',
        animationName: 'catalog_in',
        animationDuration: '.15s',
        animationTimingFunction: 'ease-out',
        animationFillMode: 'forwards',
        '& h4': {
            fontSize: 17,
            fontWeight: 600,
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
}));

export default function Catalog({ data, animation }) {
    
    const [hover, setHover] = React.useState(data.allPrismicCatalog.edges[0].node.data.categories[0].category.document.data.name);

    const classes = useStyles({ animation });

    return (
        <div className={classes.root}>
            <div className={classes.root_container}>
                <div className={classes.container}>
                    <div className={classes.catalog}>
                        <Typography variant="h2">{data.allPrismicCatalog.edges[0].node.data.catalog_name.text}</Typography>
                        <nav className={classes.menu}>
                            {data.allPrismicCatalog.edges[0].node.data.categories.map((category, i) => (
                                <Category
                                    key={`category ${i}`}
                                    svg={category.category.document.data.category_icon.localFile.publicURL + '#fill'}
                                    alt={category.category.document.data.category_icon.alt}
                                    name={category.category.document.data.name}
                                    setHover={setHover} />
                            ))}
                        </nav>
                    </div>
                    <Divider orientation="vertical" className={classes.divider} />
                    {data.allPrismicCatalog.edges[0].node.data.categories.filter(atr => atr.category.document.data.name === hover).map((category, i) => (
                        <div className={classes.category} key={`category ${i}`}>
                            <div className={classes.wrapper}>
                                <img src={category.category.document.data.category_icon.localFile.publicURL + '#gradient'} alt={''} />
                                <Typography variant="h3">{category.category.document.data.name}</Typography>
                            </div>
                            <div>
                                <div className={classes.sub_categories}>
                                {category.category.document.data.children.map((sub_category, i) => (
                                    <div className={classes.sub_category} key={`subcategory ${i}`}>
                                        <Typography variant="h4">
                                            {(sub_category.child.document === null) ? null : sub_category.child.document.data.name}
                                        </Typography>
                                        <nav>

                                        </nav>
                                    </div>
                                ))}
                                </div>
                                <nav className={classes.brands}></nav>
                            </div>
                        </div>
                    ))}
                </div>
                
                {data.allPrismicCatalog.edges[0].node.data.categories.filter(atr => atr.category.document.data.name === hover).map((wrapper, i) => (
                    <div className={classes.promo}>
                        {wrapper.category.document.data.body.map((promo, i) => (
                            <img src={promo.primary.catalog_img.localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={promo.primary.catalog_img.alt} className={classes.img} key={`images_promo ${i}`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};