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

export default function AddOnTable(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Price</StyledTableCell>
                        <StyledTableCell>Product Type</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, i) => (
                        <StyledTableRow key={row.name + i}>

                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.price}</StyledTableCell>
                            <StyledTableCell>{row.productType}</StyledTableCell>
                            <StyledTableCell className={classes.actions}>
                                <Button type="secondary" className={classes.actionBtn} icon={<FiEdit2 />} size={'small'} />
                                <Button type="secondary" className={classes.actionBtn} icon={<BsArrowsAngleExpand />} size={'small'} />

                            </StyledTableCell>


                        </StyledTableRow>
                    ))}

                </TableBody>

            </Table>

        </TableContainer>
    );
}