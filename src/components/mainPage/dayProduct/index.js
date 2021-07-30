import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ProductCard from './cardProduct';
import SaleValue from './saleValue';
import Countdown from 'react-countdown';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.secondary,
        borderRadius: 20,
        width: 'fit-content',
        height: 'fit-content',
        padding: 40,
        '@media (max-width: 1025px)': {
            padding: 12,
        },
        '@media (max-width: 767px)': {
            padding: 28,
            width: '100%',
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 28,
    },
    title_count: {
        '& h3': {
            fontSize: 20,
            fontWeight: 700,
            color: theme.palette.color.accentSecondary,
        },
        '& h6': {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '100%',
            color: theme.palette.color.main,
            backgroundColor: theme.palette.background.brandLight,
            padding: '8px 12px 8px 12px',
            borderRadius: 100,
            marginTop: 10,
            width: 'fit-content',
        },
    },
}));

export default function DayProduct(props) {

    const classes = useStyles();

    const Tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).setHours(0,0,0,0);

    const Count = () => <Countdown date={Tomorrow} zeroPadTime={2} zeroPadDays={2} renderer={renderer} />;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Count />;
        } else {
            const hour = hours < 10 ? `0${hours}` : hours
            const min = minutes < 10 ? `0${minutes}` : minutes
            const sec = seconds < 10 ? `0${seconds}` : seconds
            return <span>{hour}:{min}:{sec}</span>;
        }
    };

    return (
        <div className={`${classes.root} index--day--product`}>
            <div className={classes.title}>
                <div className={classes.title_count}>
                    <Typography variant="h3">Товар дня</Typography>
                    <Typography variant="h6">
                        <Count />
                    </Typography>
                </div>
                <SaleValue value={props.data.allPrismicDayProduct.edges[0]?.node.data.sale} />
            </div>
            <ProductCard product={props.data.allPrismicDayProduct.edges[0]?.node.data.product.document} sale={props.data.allPrismicDayProduct.edges[0]?.node.data.sale} />
        </div>
    ); 
};