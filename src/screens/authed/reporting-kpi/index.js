import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LocationSelect from './location-select';
import { Typography } from '@material-ui/core';
import '../../../styles/authed/reporting-kpi/app.css'
import { DatePicker, Space } from 'antd';
import Button from '@material-ui/core/Button';
import KPITable from './table'

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
        goBtn:{
            marginTop:"5px",
            borderRadius:10,
            minWidth:'initial',
            fontFamily: "MontserratMedium",
            padding:"10px"

        }
    }
});


function ReportingKpi() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            day: "Friday",
            date: "09/10/2020",
            dailyTarget: "0 AED",
            daysProfit: "315 AED",
            amount: "325 AED"
        },
        {
            day: "Friday",
            date: "09/10/2020",
            dailyTarget: "0 AED",
            daysProfit: "315 AED",
            amount: "325 AED"
        },
        {
            day: "Friday",
            date: "09/10/2020",
            dailyTarget: "0 AED",
            daysProfit: "315 AED",
            amount: "325 AED"
        },
        {
            day: "Friday",
            date: "09/10/2020",
            dailyTarget: "0 AED",
            daysProfit: "315 AED",
            amount: "325 AED"
        },
    ])
    function onDateChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div classname={'kpi-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>KPI</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Location
                    </Typography>
                    <LocationSelect />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Date
                    </Typography>
                    <div className={'calenders'}>
                        <Grid xs={12} sm={4} md={3} lg={2} style={{ marginRight: "10px" }}>
                            <DatePicker onChange={(date, dateString) => { onDateChange(date, dateString) }} />
                        </Grid>
                        <Grid xs={12} sm={4} md={3} lg={2} style={{ marginRight: "10px" }}>
                            <DatePicker onChange={(date, dateString) => { onDateChange(date, dateString) }} />
                        </Grid>
                        <Grid xs={12} sm={2} md={3} lg={2}>
                            <Button variant="contained" color="secondary" disableElevation className={classes.goBtn}>
                                Go
                            </Button>
                        </Grid>
                    </div>

                </Grid>
                <Grid item xs={12}>
                    <KPITable data={data} />
                </Grid>
            </Grid>
        </div>
    );
}

export default ReportingKpi