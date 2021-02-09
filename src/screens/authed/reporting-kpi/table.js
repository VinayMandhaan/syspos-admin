import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
    },
    body: {
        fontSize: 14,
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.tertiary.main,
        },
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:nth-child(1)': {
            backgroundColor: theme.palette.primary.main,

        },
    },
}))(TableRow);



const useStyles = makeStyles((theme) => {
    return {
        tableContainer: {
            borderRadius: 10,
            overflow: "auto"
        },
        table: {
            minWidth: 700,
        },
        actionBtn: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 8
        },
        actions: {
            display: "flex",
            alignItems: "center",
        },
        footer: {
            textAlign: "center",
            width: "100%",
            padding:20
        },
        pdfBtn: {
            backgroundColor: theme.palette.fourth.main,
            color: theme.palette.primary.main,
            fontFamily: "MontserratRegular",
            borderRadius:10
        }
    }
});

export default function KPItable(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Day</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Daily Target</StyledTableCell>
                        <StyledTableCell>Days Profit</StyledTableCell>
                        <StyledTableCell>Amount</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, i) => (
                        <StyledTableRow key={row.name + i}>

                            <StyledTableCell>{row.day}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell>{row.dailyTarget}</StyledTableCell>
                            <StyledTableCell>{row.daysProfit}</StyledTableCell>
                            <StyledTableCell
                                style={{
                                    color: theme.palette.text.tertiary,
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "-10px"
                                }}><ArrowDropUpIcon /> {row.amount}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    <StyledTableRow key={"totalAmountKpi"}>
                        <StyledTableCell>{"Total Amount:"}</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell
                            style={{
                                color: theme.palette.text.tertiary,
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "-10px"
                            }}><ArrowDropUpIcon /> {"815 AED"}</StyledTableCell>

                    </StyledTableRow>

                </TableBody>

            </Table>
            <div className={classes.footer}>
                <Button variant="contained" color={'secondary'} disableElevation className={classes.pdfBtn}>
                    PDF
                </Button>
            </div>
        </TableContainer>
    );
}