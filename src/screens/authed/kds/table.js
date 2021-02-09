import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "20px"
        },
        orderHead: {
            color: theme.palette.text.secondary,
            fontFamily: "MontserratBold"
        },
        timeHead: {
            color: theme.palette.text.tertiary,
            fontFamily: "MontserratBold"
        },
        doneBtn: {
            borderRadius: 10,
            fontFamily: "MontserratMedium",
            padding: "10px 20px"
        }
    }

});

export default function OrdersTable(props) {
    const classes = useStyles();
    const theme = useTheme()
    const order = { ...props.data }
    return (
        <Card className={classes.root}>
            <CardContent style={{ padding: "0px" }}>
                <div className={classes.header}>
                    <Typography varian={'subtitle2'} className={classes.orderHead}>
                        Order: {order.orderId}
                    </Typography>
                    <Typography varian={'subtitle2'} className={classes.timeHead}>
                        Time: {order.time}
                    </Typography>
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align={"center"}>Amount</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {order.items.map((v, i) => {
                            return <TableRow key={`orderItem${v.name + i}`}>
                                <TableCell scope="row">
                                    {v.name}
                                </TableCell>
                                <TableCell align={"center"}>{v.amount}</TableCell>

                            </TableRow>
                        })}


                        <TableRow key={"totalOrderItemsRow"}>
                            <TableCell scope="row" style={{ color: theme.palette.text.primary }}>
                                {'Total Items:'}
                            </TableCell>
                            <TableCell align={"center"}>{"8"}</TableCell>

                        </TableRow>

                    </TableBody>
                </Table>
                <div style={{ textAlign: "center", margin: "20px" }}>
                    <Button variant="contained" color="secondary" disableElevation className={classes.doneBtn}>
                        DONE
                </Button>
                </div>
            </CardContent>
        </Card>
    );
}