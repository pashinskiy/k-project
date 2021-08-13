import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import ScrollBar from '../../scrollBar';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 80,
        overflowX: 'visible',
        '& h3': {
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
    card: {
        width: 194,
        height: 300,
        flexShrink: 0,
        borderRadius: 20,
        overflow: "hidden",
        WebkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0, 0, 0)',
        MozTransform: 'translate3d(0, 0, 0)',
        background: theme.palette.background.secondary,
        marginRight: 12,
        '&:last-child': {
            marginRight: 0,
        },
        '& h4': {
            fontSize: 17,
            fontWeight: 700,
            padding: 20,
            '& span': {
                color: theme.palette.color.accentSecondary,
            },
        },
    },
    img: {
        height: 220,
        width: 'auto',
    },
}));

export default function Advantages(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h3">
                    Наши преимущества
                </Typography>
                {/* <button
                    className={classes.catalog}
                    onClick={() => {
                        
                    }}>
                    Перейти в каталог
                </button> */}
            </div>
            <div className={classes.advantages}>
                <ScrollBar buttonNext fullScreen>
                    {props.data.allPrismicAdvantage.edges.map((advantage, i) => (
                        <div className={classes.card}>
                            <Typography variant="h4" dangerouslySetInnerHTML={{
                                __html: advantage.node.data.adv_title.raw[0].text
                                }} />
                            <GatsbyImage loading="eager"
                                image={advantage.node.data.adv_img.localFile?.childImageSharp.gatsbyImageData}
                                alt={advantage.node.data.adv_img.alt ?? "img"}
                                className={classes.img} />
                        </div>
                    ))}
                </ScrollBar>
            </div>
        </div>
    );
};