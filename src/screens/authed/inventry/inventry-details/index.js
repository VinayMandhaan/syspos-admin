import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import '../../../../styles/authed/inventry/app.css'
import LocationSelect from './location-select'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import InventryDetailsTable from './table'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => {
    return {
        heading: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold",
            margin: "12px 0px 0px"
        },
        subHeading: {
            color: theme.palette.text.primary,
            fontFamily: "MontserratMedium",
            margin: "0px 0px 10px",
            fontSize: 22
        },
        typography: {
            color: theme.palette.text.primary,
            fontFamily: "MontserratMedium",
            fontSize: "12px"
        },
        addBtn: {
            borderRadius: 10,
            minWidth:"initial",
            fontFamily: "MontserratMedium",
            padding: "16px"
        }
    }
});


function InventryDetails() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            type: "Out",
            qty: 0,
            date: "10/15/2020",
            expDate: "12/20/2020",
            reference: "Invoice 5844B603-01DE-4640-2342-063423DGSU"
        },
        {
            type: "Out",
            qty: 0,
            date: "10/15/2020",
            expDate: "12/20/2020",
            reference: "Invoice 5844B603-01DE-4640-2342-063423DGSU"
        },
        {
            type: "Out",
            qty: 0,
            date: "10/15/2020",
            expDate: "12/20/2020",
            reference: "Invoice 5844B603-01DE-4640-2342-063423DGSU"
        }
    ])

    return (
        <div className={'inventry-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Inventory Movements</h1>
                    <h1 className={clsx(classes.subHeading)}>Cream Sauce  Cream Sauce</h1>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Location
                    </Typography>
                    <LocationSelect />
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Button variant="contained" color="secondary" disableElevation className={classes.addBtn}>
                        <AddIcon size={28} />
                    </Button>

                </Grid>

                <Grid item xs={12}>
                    <InventryDetailsTable data={data} />

                </Grid>
            </Grid>
        </div>
    );
}

export default InventryDetails