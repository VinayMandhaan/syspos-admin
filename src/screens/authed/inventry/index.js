import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import '../../../styles/authed/inventry/app.css'
import LocationSelect from './location-select'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CategorySelect from './category-select'
import MaterialsSearch from './materials-search'
import InventryTable from './table'


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


function Inventry() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        },
        {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        },
        {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        },
        {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        }, {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        }, {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        }, {
            name: "Beef",
            description: "New Recipe",
            price: 100,
            stock: -2,
            physical: 5,
            diff: "-11,2",
            unitType: "Kg",
            lowStock: 7,
        },
    ])

    return (
        <div className={'inventry-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Inventory</h1>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Location
                    </Typography>
                    <LocationSelect />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Category
                    </Typography>
                    <CategorySelect />

                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Materials
                    </Typography>
                    <MaterialsSearch />

                </Grid>
                <Grid item xs={12}>
                    <InventryTable data={data} />

                </Grid>
            </Grid>
        </div>
    );
}

export default Inventry