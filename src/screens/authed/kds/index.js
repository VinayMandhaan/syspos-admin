import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import '../../../styles/authed/kds/app.css'

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CategorySelect from './category-select'
import OrdersTable from './table'


const useStyles = makeStyles((theme) => {
    return {
        heading: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold",
            margin: "12px 0px 10px"
        },
        typography: {
            color: theme.palette.text.primary,
            fontFamily: "MontserratMedium",
            fontSize: "12px"
        }
    }
});


function Kds() {
    const classes = useStyles();
    const [orders, setOrders] = useState([
        {
            orderId: "0000123",
            time: "00:50:22",
            items: [
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                }
            ]
        },
        {
            orderId: "000023",
            time: "00:06:32",
            items: [
                {
                    name: "Chicken Burger",
                    amount: 1
                },
                {
                    name: "Beef Burger",
                    amount: 1
                },
                {
                    name: "Sprite",
                    amount: 1
                },
                {
                    name: "Beef Burger",
                    amount: 1
                },
                {
                    name: "Sprite",
                    amount: 1
                },
            ]
        },
        {
            orderId: "0000123",
            time: "00:50:22",
            items: [
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                }
            ]
        },
        {
            orderId: "000023",
            time: "00:06:32",
            items: [
                {
                    name: "Chicken Burger",
                    amount: 1
                },
                {
                    name: "Beef Burger",
                    amount: 1
                },
                {
                    name: "Sprite",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                },
                {
                    name: "Fish Burger (No Bread)",
                    amount: 1
                }
            ]
        }
    ])
    return (
        <div className={'kds-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Orders</h1>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Category
                    </Typography>
                    <CategorySelect />

                </Grid>

                <Grid container xs={12} spacing={3} style={{margin:"0px auto"}}>

                    {orders.map((v, i) => {
                        return <Grid item xs={12} sm={12} md={6} lg={6}>
                            <OrdersTable data={v} />
                        </Grid>
                    })}
                    {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                        <OrdersTable />
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default Kds