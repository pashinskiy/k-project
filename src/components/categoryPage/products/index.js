import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { graphql, useStaticQuery } from 'gatsby';
import CardProduct from '../../scrollBar/productsScrollBar/cardProduct';
import ScrollBar from '../scrollBar';

const useStyles = makeStyles(theme => ({
    product: {
        marginRight: 12,
    },
}));

export default function AllProductsByCategory({ subcategory_product }) {

    const data = useStaticQuery(graphql`
        query AllProducts {
            allPrismicProduct {
                edges {
                    node {
                        uid
                        data {
                            name
                            price
                            images {
                                image {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                    alt
                                }
                            }
                            category {
                                uid
                            }
                        }
                    }
                }
            }
        }
    `);

    const classes = useStyles();

    return (
        <ScrollBar fullScreen buttonNext >
            {data.allPrismicProduct.edges?.filter(sub => sub.node.data.category.uid === subcategory_product.child.document.uid).map((product, i) => (
                <div key={`${product.node.uid} ${i}`} className={classes.product}>
                    <CardProduct product={product.node} />
                </div>
            ))}
        </ScrollBar>
    );
};