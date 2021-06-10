import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import '../catalog.css';
import CardWidget from '../../../widgets/cardWidget';
import SaleButton from '../../header/link/sale';
import { Link } from 'gatsby';
import SaleCard from '../../../saleCardPanel/saleCard';
import Social from '../../footer/social';
import DefaultLink from '../../footer/link/default';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: 'fit-content',
        zIndex: 1000,
        background: theme.palette.color.mainContrast,
        borderRadius: '0px 0px 40px 40px',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 62,
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
        '@media(max-width: 1024px)': {
            padding: '2.18vw',
            paddingTop: '1.25vw',
            paddingBottom: 'calc(2.18vw - 8px)',
        },
        '@media(max-width: 834px)': {
            padding: '3.35vw',
            paddingTop: '1.918vw',
            paddingBottom: 'calc(3.35vw - 8px)',
        },
        '@media(max-width: 414px)': {
            padding: '5.797vw',
            paddingTop: '3.864vw',
            paddingBottom: 'calc(5.797vw - 8px)',
        },
        boxSizing: 'border-box',
        maxWidth: 1280,
        width: '100%',
    },
    container: {
        height: 'fit-content',
    },
    catalog: {
        width: 'fit-content',
        marginRight: 12,
        '@media (max-width: 1024px)': {
            marginRight: 0,
        },
        '& h2': {
            fontSize: 17,
            fontWeight: 600,
            '@media (max-width: 1024px)': {
                marginBottom: 16,
            },
        },
    },
    menu: {
        display: 'flex',
        flexWrap: 'wrap',
        '@media(max-width: 787px)': {
            justifyContent: 'space-between',
        },
        '& .gatsby--image': {
            '@media(max-width: 389px)': {
              width: "103%",
              height: "103%",
            },
            '@media(max-width: 362px)': {
              width: "106%",
              height: "106%",
            },
        },
        '& .catalog--category': {
            height: 128,
            marginBottom: 8,
            width: 'calc(100% / 4 - 8px * 3 / 4)',
            marginRight: 8,
            '&:nth-child(4n)': {
                margin: 0,
            },
            '@media(max-width: 787px)': {
                marginRight: 0,
                width: 'calc(100% / 3 - 8px * 2 / 3)',
            },
            '@media(max-width: 550px)': {
                width: 'calc(100% / 2 - 8px / 2)',
                height: '30.917vw',
            },
            '@media(max-width: 300px)': {
                width: '100%',
                height: '30.917vw',
            },
        },
    },
    stories: {
        display: 'flex',
        overflowX: 'scroll',
        marginBottom: 28,
        '@media(max-width: 1024px)': {
            marginLeft: '-2.18vw',
            marginRight: '-2.18vw',
            paddingLeft: '2.18vw',
        },
        '@media(max-width: 834px)': {
            marginLeft: '-3.35vw',
            marginRight: '-3.35vw',
            paddingLeft: '3.35vw',
        },
        '@media(max-width: 414px)': {
            marginLeft: '-5.797vw',
            marginRight: '-5.797vw',
            paddingLeft: '5.797vw',
        },
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '& .catalog--stories': {
            width: 120,
            height: 120,
        },
        '& .card--title': {
            fontSize: 12,
        },
    },
    wrapper_stories: {
        marginRight: 4,
        '&:last-child': {
            '@media(max-width: 1024px)': {
                paddingRight: '2.18vw',
            },
            '@media(max-width: 834px)': {
                paddingRight: '3.35vw',
            },
            '@media(max-width: 414px)': {
                paddingRight: '5.797vw',
            },
        },
    },
    all_sales: {
        width: '100%',
        marginTop: 40,
    },
    title_sale: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    all_sales_link: {
        padding: '8px 12px',
        borderRadius: 12,
        background: theme.palette.background.secondary,
        color: theme.palette.color.accent,
        fontSize: 14,
        textDecoration: 'none',
    },
    sales: {
        display: 'flex',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '@media(max-width: 1024px)': {
            marginLeft: '-2.18vw',
            marginRight: '-2.18vw',
            paddingLeft: '2.18vw',
        },
        '@media(max-width: 834px)': {
            marginLeft: '-3.35vw',
            marginRight: '-3.35vw',
            paddingLeft: '3.35vw',
        },
        '@media(max-width: 414px)': {
            marginLeft: '-5.797vw',
            marginRight: '-5.797vw',
            paddingLeft: '5.797vw',
        },
    },
    sale: {
        maxWidth: 366,
        width: 'calc(100vw - 2.18vw)',
        '@media(max-width: 834px)': {
            width: 'calc(100vw - 3.35vw * 2)',
        },
        '@media(max-width: 414px)': {
            width: 'calc(100vw - 5.797vw * 2)',
        },
        flexShrink: 0,
        height: 'fit-content',
        marginRight: 12,
        '&:last-child': {
            '@media(max-width: 1024px)': {
                marginRight: '2.18vw',
            },
            '@media(max-width: 834px)': {
                marginRight: '3.35vw',
            },
            '@media(max-width: 414px)': {
                marginRight: '5.797vw',
            },
        },
    },
    add_container: {
        marginTop: 40,
        '& h2': {
            fontSize: 17,
            fontWeight: 600,
            '@media (max-width: 1024px)': {
                marginBottom: 16,
            },
        },
    },
    social: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    social_wrapper: {
        background: theme.palette.color.accent,
        borderRadius: '100%',
        marginRight: 8,
        '& img': {
            display: 'block',
        },
    },
    contact: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    contact_wrapper: {
        background: theme.palette.background.secondary,
        borderRadius: 12,
        padding: 12,
        marginRight: 8,
        marginBottom: 8,
        '& a': {
            margin: 0,
            fontSize: 14,
            color: theme.palette.color.accentSecondary,
        },
    },
}));

export default function MobileCatalog({ data, animation }) {

    const classes = useStyles({ animation });

    return (
        <div className={classes.root}>
            <div className={classes.root_container}>
                <div className={classes.container}>
                    <div className={classes.stories}>
                        {data.allPrismicCatalog.edges[0].node.data.all_stories.map((stories, i) => (
                            <Grid className={classes.wrapper_stories} key={`stories ${i}`}>
                                <CardWidget
                                    variant={"stories"}
                                    cardImage={stories.stories.document.data.image.localFile.childImageSharp.gatsbyImageData}
                                    cardTitle={stories.stories.document.data.text.text}
                                    cardLink={""}  />
                            </Grid>
                        ))}
                    </div>
                    <div className={classes.catalog}>
                        <Typography variant="h2">{data.allPrismicCatalog.edges[0].node.data.catalog_name.text}</Typography>
                        <nav className={classes.menu}>
                            {data.allPrismicCatalog.edges[0].node.data.categories.map((category, i) => (
                                <CardWidget
                                    variant={"category"}
                                    key={`category ${i}`}
                                    cardImage={category.category.document.data.image.localFile.childImageSharp.gatsbyImageData}
                                    cardTitle={category.category.document.data.name}
                                    cardLink={""}  />
                            ))}
                        </nav>
                    </div>
                    <div className={classes.all_sales}>
                        <div className={classes.title_sale}>
                            <SaleButton name={data.allPrismicCatalog.edges[0].node.data.sales_name.text} link={''} />
                            <Link to={'/sales'} className={classes.all_sales_link}>
                                Все
                            </Link>
                        </div>
                        <nav className={classes.sales}>
                            {data.allPrismicCatalog.edges[0].node.data.all_sales.map((sale, i) => (
                                <Grid key={`sale ${i}`} className={classes.sale}>
                                    <SaleCard sale={sale.sales.document} />
                                </Grid>
                            ))}
                        </nav>
                    </div>
                    <div className={classes.add_container}>
                        <Typography variant="h2">Социальные сети</Typography>
                        <div className={classes.social}>
                            {data.allPrismicFooter.edges[0].node.data.body2.filter(atr => atr.slice_type === 'social').map((link, i) => (
                                <div className={classes.social_wrapper} key={`social ${i}`}>
                                    <Social icon={link.primary.social_img_white.localFile.publicURL} alt={link.primary.social_img.alt} link={link.primary.link.url} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.add_container}>
                        <Typography variant="h2">Связаться с нами</Typography>
                        <div className={classes.contact}>
                            {data.allPrismicFooter.edges[0].node.data.body2.filter(atr => atr.slice_type === 'contact').map((link, i) => (
                                <div className={classes.contact_wrapper} key={`contact ${i}`}>
                                    <DefaultLink name={link.primary.contact_link_name.text} link={link.primary.contact_link.url} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};