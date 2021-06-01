import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProductCard from '../../../scrollBar/productsScrollBar/cardProduct';
import Arrow from '../../../../../static/svg/arrow.svg';

const useStyles = makeStyles(theme => ({
    slider: {
        display: 'flex',
        overflow: 'hidden',
        width: "250px",
        "@media(max-width: 1024px)": {
            marginBottom: 28,
            width: '100%',
            justifyContent: 'space-between',
        },
        "@media(max-width: 834px)": {
            marginBottom: 28,
            width: '100%',
            justifyContent: 'flex-start',
            overflowX: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '& div': {
            flex: 'none',
        },
    },
    product: {
        transform: props => `translateX(${props.arrow}px)`,
        transition: '0.4s ease all',
        marginRight: 12,
        "@media(max-width: 834px)": {
            marginRight: 12,
        },
        '&:first-child': {
            "@media(max-width: 834px)": {
                paddingLeft: 30,
            },
        },
        '&:last-child': {
            "@media(max-width: 834px)": {
                paddingRight: 30,
            },
        },
        '& .product--card': {
            width: "250px",
            "@media(max-width: 1024px)": {
                width: "19.53vw",
            },
            "@media(max-width: 834px)": {
                width: "29.97vw",
            },
            "@media(max-width: 414px)": {
              width: "49.51vw",
            },
        },
    },
    arrows: {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        "@media(max-width: 1024px)": {
            display: 'none',
        },
    },
    button_arrow: {
        border: 'none',
        background: 'none',
        padding: 0,
        '&:first-child': {
            marginRight: 10,
            '& .arrow': {
                transform: 'rotate(180deg)',
            },
        },
        '& .arrow': {
            cursor: 'pointer',
        },
    },
}));

export default function ProductSlider({ data }) {

    const all_width = -(4 * 250 + 3 * 12);

    const [arrow, setArrow] = React.useState(0);

    const clickLeftArrow = () => {
        var value = arrow + 262

        if (value >= 0) {
            value = arrow
        } else {
            value = arrow + 262
        }

        setArrow(value)
    };

    const clickRightArrow = () => {
        var value = arrow - 262

        if (value > all_width) {
            value = arrow - 262
        } else {
            value = 0
        }

        setArrow(value)
    };

    const classes = useStyles({ arrow });

    return (
        <div className={classes.root}>
            <div className={classes.slider}>
                <div className={classes.product}>
                    <ProductCard product={data.allPrismicProduct.edges[0].node} />
                </div>
                <div className={classes.product}>
                    <ProductCard product={data.allPrismicProduct.edges[1].node} />
                </div>
                <div className={classes.product}>
                    <ProductCard product={data.allPrismicProduct.edges[2].node} />
                </div>
                <div className={classes.product}>
                    <ProductCard product={data.allPrismicProduct.edges[3].node} />
                </div>
            </div>

            <div className={classes.arrows}>
                <button aria-label="Arrow Left" className={classes.button_arrow} onClick={() => {clickLeftArrow();}} onKeyPress={() => {clickLeftArrow();}}>
                    <Arrow width="14" height="16" className={'arrow'} />
                </button>
                <button aria-label="Arrow Right" className={classes.button_arrow} onClick={() => {clickRightArrow();}} onKeyPress={() => {clickRightArrow();}}>
                    <Arrow width="14" height="16" className={'arrow'} />
                </button>
            </div>
        </div>
    );
};