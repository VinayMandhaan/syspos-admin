import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import { Descriptions } from 'antd'
import Paper from '@material-ui/core/Paper'
import '../../../../styles/authed/sales/orders/app.css'
import Divider from '@material-ui/core/Divider'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            minWidth: 275,
            borderRadius: 10,
            padding: 0
        },
        heading: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold",
            margin: "12px 0px 10px",
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 20
        },
        title: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold",
            fontSize: 16
        },
        printBtn: {
            backgroundColor: theme.palette.fourth.main,
            color: theme.palette.primary.main,
            fontFamily: "MontserratMedium",
            borderRadius: 10
        },
        descText: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratMedium",

        },
        itemsTablebox: {
            backgroundColor: "#f7f8fa"
        },
        cancelBtn: {
            margin: "20px auto",
            backgroundColor: theme.palette.fifth.main,
            color: theme.palette.primary.main,
            borderRadius: 10,
            padding: "10px 14px",
            fontFamily: "MontserratMedium"
        },
        table:{
            padding:0
        }
    }
});




export default function InvoiceDetails() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            product:"Fish Burger",
            price:30,
            qty:2,
            subTotal:60
        },
        {
            product:"Fish Burger",
            price:30,
            qty:2,
            subTotal:60
        }
    ])

    return (
        <div classname={'orderdetails-container'}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={clsx(classes.heading)}>Invoices</h1>
                </Grid>

                <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardContent style={{ padding: "0px" }}>
                            <div className={clsx(classes.header)}>
                                <Typography variant={"subtitle2"} className={classes.title}>
                                    Invoice #002963 - October 9, 2020
                                </Typography>
                                <Button variant={'contained'} color={'secondary'} disableElevation className={classes.printBtn}>Print</Button>
                            </div>
                            <div className={'description-rows'}>
                                <Paper variant="outlined" style={{ borderLeft: "none" }} square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        #Items
                                </Typography>
                                </Paper>
                                <Paper variant="outlined" square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        2
                                </Typography>
                                </Paper>
                            </div>

                            <div className={'description-rows'}>
                                <Paper variant="outlined" style={{ borderLeft: "none" }} square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        Total
                                </Typography>
                                </Paper>
                                <Paper variant="outlined" square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        90
                                </Typography>
                                </Paper>
                            </div>

                            <div className={'description-rows'}>
                                <Paper variant="outlined" style={{ borderLeft: "none" }} square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        VAT
                                </Typography>
                                </Paper>
                                <Paper variant="outlined" square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        0
                                </Typography>
                                </Paper>
                            </div>

                            <div className={'description-rows'}>
                                <Paper variant="outlined" style={{ borderLeft: "none" }} square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        Note
                                </Typography>
                                </Paper>
                                <Paper variant="outlined" square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        **IV
                                </Typography>
                                </Paper>
                            </div>

                            <div className={'description-rows'}>
                                <Paper variant="outlined" style={{ borderLeft: "none" }} square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        Status
                                </Typography>
                                </Paper>
                                <Paper variant="outlined" square={true} className={classes.descText}>
                                    <Typography variant={"subtitle1"}>
                                        Completed
                                </Typography>
                                </Paper>
                            </div>
                            <Divider />
                            <div className={classes.itemsTablebox}>
                                <Typography variant={"subtitle2"} className={classes.title} style={{padding:20}}>
                                    Items
                                </Typography>



                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Qty</TableCell>
                                            <TableCell>Sub-Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((row) => (
                                            <TableRow key={row.product}>
                                                <TableCell>
                                                    {row.product}
                                                </TableCell>
                                                <TableCell>{row.price}</TableCell>
                                                <TableCell>{row.qty}</TableCell>
                                                <TableCell>{row.subTotal}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>





                                <div style={{ textAlign: 'center' }}>
                                    <Button variant={'contained'} color={'secondary'} disableElevation className={classes.cancelBtn}>
                                        Cancel Order
                                </Button>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </div >
    );
}