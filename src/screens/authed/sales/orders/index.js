import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OrdersTable from './table'
import '../../../../styles/authed/sales/orders/app.css'


const useStyles = makeStyles((theme) => {
    console.log(theme, "====MUI THEME")
    return {
        heading: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold",
            margin: "12px 0px 10px"
        },
    }
});


function Orders() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            id: "009345",
            items: "4",
            paid: "90",
            total: "45",
            date: "10/09/2020",
            table: "0",
            status: "Completed"
        },
        {
            id: "009345",
            items: "4",
            paid: "90",
            total: "45",
            date: "10/09/2020",
            table: "0",
            status: "Cancelled"
        },
        {
            id: "009345",
            items: "4",
            paid: "90",
            total: "45",
            date: "10/09/2020",
            table: "0",
            status: "Completed"
        },
        {
            id: "009345",
            items: "4",
            paid: "90",
            total: "45",
            date: "10/09/2020",
            table: "0",
            status: "Cancelled"
        },
    ])


    return (
        <div classname={'invoices-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Orders</h1>
                </Grid>
                <Grid item xs={12}>
                    <OrdersTable data={data} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Orders