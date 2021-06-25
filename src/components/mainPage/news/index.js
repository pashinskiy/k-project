import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CardWidget from '../../widgets/cardWidget';
import ScrollBar from '../../scrollBar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 'fit-content',
        '& h6': {
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 20,
            lineHeight: '24px',
            '@media (max-width: 1279px)': {
                display: 'none',
            },
        },
        '@media (max-width: 1279px)': {
            gridColumn: 'span 2',
        },
    },
    story: {
        width: 144,
        height: 144,
        marginRight: 4,
        '@media (max-width: 767px)': {
            width: 120,
            height: 120,
        },
    },
}));

export default function News(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">Новости</Typography>
            <div className={classes.categories}>
                <ScrollBar buttonNext>
                    {props.data.edges.map((stories, i) => (
                        <Grid className={classes.story}>
                            <CardWidget
                                variant={"stories"}
                                key={`stories ${i}`}
                                cardImage={stories.node.data.image.localFile.childImageSharp.gatsbyImageData}
                                cardTitle={stories.node.data.text.text}
                                cardLink={""}  />
                        </Grid>
                    ))}
                </ScrollBar>
            </div>
        </div>
    );
};