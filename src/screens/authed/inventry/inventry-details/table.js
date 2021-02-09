import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Radio } from 'antd';
import {
    FiEdit2
} from 'react-icons/fi'
import {
    BsArrowsAngleExpand
} from 'react-icons/bs'
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



const useStyles = makeStyles({
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
    }
});

export default function InventryDetailsTable(props) {
    const classes = useStyles();


    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Type</StyledTableCell>
                        <StyledTableCell>Qty</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Exp. Date</StyledTableCell>
                        <StyledTableCell>Reference</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, i) => (
                        <StyledTableRow key={row.type + i}>
                            <StyledTableCell>
                                {row.type}
                            </StyledTableCell>
                            <StyledTableCell>{row.qty}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell>{row.expDate}</StyledTableCell>
                            <StyledTableCell>{row.reference}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}