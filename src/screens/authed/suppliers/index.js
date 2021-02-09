import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    console.log(theme, "====MUI THEME")
    return {
    }
});


function Suppliers() {
    const classes = useStyles();


    return (
        <div>
           <h1>Suppliers</h1>
        </div>
    );
}

export default Suppliers