import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CardWidget from '../../widgets/cardWidget';
import ScrollBar from '../../scrollBar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& h3': {
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '100%',
            '@media (max-width: 1024px)': {
                fontSize: 28,
            },
            '@media (max-width: 767px)': {
                fontSize: 20,
            },
        },
    },
    brand: {
        width: 140,
        height: 165,
        marginRight: 12,
        overflow: 'hidden',
    },
    title: {
        width: '100%',
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export default function Popular(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h3">
                    Популярные бренды
                </Typography>
            </div>
            <div className={classes.brands}>
                <ScrollBar buttonNext>
                    {props.data.allPrismicBrand.edges.map((brand, i) => (
                        <Grid className={classes.brand}>
                            <CardWidget
                                variant={"brand_mainPage"}
                                key={`brand ${i}`}
                                cardImage={brand.node.data.body[0]?.primary?.image?.localFile.childImageSharp.gatsbyImageData}
                                cardTitle={brand.node.data.name}
                                cardLink={""}  />
                        </Grid>
                    ))}
                </ScrollBar>
            </div>
        </div>
    );
};