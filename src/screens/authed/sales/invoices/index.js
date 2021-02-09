import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import '../../../../styles/authed/sales/invoices/app.css'
import { DatePicker, Space } from 'antd';
import Button from '@material-ui/core/Button';
import InvoicesSearch from './invoices-search'
import InvoicesTable from './table'
import { Select } from 'antd';

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
        goBtn: {
            marginTop:"5px",
            borderRadius: 10,
            minWidth: 'initial',
            fontFamily: "MontserratMedium",
            padding: "10px"
        }
    }
});


function Invoices() {
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
    function onDateChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div classname={'invoices-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Invoices</h1>
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
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant={'subtitle2'} className={classes.typography}>
                        Invoices Number
                    </Typography>
                    <InvoicesSearch />
                </Grid>
                <Grid xs={12} sm={false} md={4} lg={5}>

                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={1} style={{marginTop:"20px"}}>
                    <Select defaultValue="All" onChange={(v)=>{console.log(v)}}>
                        <Option value="All">All</Option>
                        <Option value="New">New</Option>
                        <Option value="Old">Old</Option>

                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <InvoicesTable data={data} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Invoices