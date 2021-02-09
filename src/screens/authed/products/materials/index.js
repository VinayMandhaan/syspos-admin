import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import '../../../../styles/authed/sales/invoices/app.css'
import { DatePicker, Space } from 'antd';
import Button from '@material-ui/core/Button';
import MaterialsTable from './table'
import { Select } from 'antd';
import MaterialsSearch from './materials-search'
import LocationSelect from './select-location'
import AddIcon from '@material-ui/icons/Add';
const { Option } = Select;

const useStyles = makeStyles((theme) => {
    console.log(theme, "====MUI THEME")
    return {
        heading: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold",
            margin: "12px 0px 10px"
        },
        typography: {
            color: theme.palette.text.primary,
            fontFamily: "MontserratMedium",
            fontSize: "12px",
            // marginBottom:5
        },
        addBtn: {
            borderRadius: 10,
            minWidth:"initial",
            fontFamily: "MontserratMedium",
            padding: "16px"
        }
    }
});


function Materials() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            name: "Coca Cola",
            description: "New Recipe",
            price: "20",
            unit: "KG",
            lowStock: "5",
        },
        {
            name: "Beef",
            description: "New Recipe",
            price: "20",
            unit: "KG",
            lowStock: "7",
        },
        {
            name: "Chocolate",
            description: "New Recipe",
            price: "20",
            unit: "KG",
            lowStock: "8",
        },
        {
            name: "Fanta",
            description: "New Recipe",
            price: "20",
            unit: "KG",
            lowStock: "2",
        },
    ])


    return (
        <div classname={'invoices-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Materials</h1>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Location
                    </Typography>
                    <LocationSelect />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Materials
                    </Typography>
                    <MaterialsSearch />

                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Button variant="contained" color="secondary" disableElevation className={classes.addBtn}>
                        <AddIcon size={28} />
                    </Button>

                </Grid>


                <Grid item xs={12}>
                    <MaterialsTable data={data} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Materials