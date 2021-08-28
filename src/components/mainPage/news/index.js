import React from 'react';
import { Grid, makeStyles, useMediaQuery, Typography } from '@material-ui/core';
import CardWidget from '../../widgets/cardWidget';
import ScrollBar from '../../scrollBar';
import { Link } from 'gatsby';

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

/**
 * Слайдер новости
 * @module src/components/mainPage/news
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default function News(props) {
    const maxWidth1024 = useMediaQuery("(max-width: 1025px)")
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">Новости</Typography>
            <div className={classes.categories}>
                <ScrollBar buttonNext fullScreen={maxWidth1024}>
                    {props.data.edges.map((stories, i) => (
                        stories.node.data.tumbler_link === true ?
                            <Link to={`${stories.node.data.link}`}>
                                <Grid className={classes.story}>
                                    <CardWidget
                                        variant={"stories"}
                                        key={`stories ${i}`}
                                        cardImage={stories.node.data.image.localFile?.childImageSharp.gatsbyImageData}
                                        cardTitle={stories.node.data.text.text}
                                        cardLink={""}  />
                                </Grid>
                            </Link>
                        :
                            <a href={`${stories.node.data.link}`} target="_blank" rel="noopener noreferrer">
                                <Grid className={classes.story}>
                                    <CardWidget
                                        variant={"stories"}
                                        key={`stories ${i}`}
                                        cardImage={stories.node.data.image.localFile?.childImageSharp.gatsbyImageData}
                                        cardTitle={stories.node.data.text.text}
                                        cardLink={""}  />
                                </Grid>
                            </a>
                    ))}
                </ScrollBar>
            </div>
        </div>
    );
};