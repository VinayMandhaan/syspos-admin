import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    console.log(theme, "====MUI THEME")
    return {
    }
});


function ReportingSales() {
    const classes = useStyles();


    return (
        <div>
           <h1>ReportingSales</h1>
        </div>
    );
}

export default ReportingSales