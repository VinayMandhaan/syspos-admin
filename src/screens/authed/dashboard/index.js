import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import '../../../styles/authed/dashboard/app.css'

const useStyles = makeStyles((theme) => {
    console.log(theme, "====MUI THEME")
    return {
    }
});


function Dashboard() {
    const classes = useStyles();


    return (
        <div>
           <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard