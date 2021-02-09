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
import {
    BsArrowsAngleExpand
} from 'react-icons/bs'
import { Button, Tag } from 'antd';
import {useHistory} from 'react-router-dom'

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

    }
});

export default function OrdersTable(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Items</StyledTableCell>
                        <StyledTableCell>Paid</StyledTableCell>
                        <StyledTableCell>Total</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Table</StyledTableCell>

                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, i) => (
                        <StyledTableRow key={row.id + i}>

                            <StyledTableCell>{row.id}</StyledTableCell>
                            <StyledTableCell>{row.items}</StyledTableCell>
                            <StyledTableCell>{row.paid}</StyledTableCell>
                            <StyledTableCell>{row.total}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell>{row.table}</StyledTableCell>
                            <StyledTableCell>
                                {row.status === "Completed" ?
                                    <Tag color={theme.palette.fourth.main} style={{
                                        backgroundColor:"#e6f6ec",
                                        color:"#55d776",
                                        fontFamily:"MontserratMedium",
                                        borderRadius:6,

                                    }}>{row.status}</Tag>
                                    :
                                    <Tag color={theme.palette.fifth.main} style={{
                                        backgroundColor:"#fde6e7",
                                        color:"#f35560",
                                        fontFamily:"MontserratMedium",
                                        borderRadius:6,
                                    }}>{row.status}</Tag>
                                }
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button type="secondary" className={classes.actionBtn} icon={<BsArrowsAngleExpand />} size={'small'} onClick={()=>{
                                    history.push(`/sales/orders/${row.id}`)
                                }} />
                            </StyledTableCell>


                        </StyledTableRow>
                    ))}

                </TableBody>

            </Table>

        </TableContainer>
    );
}