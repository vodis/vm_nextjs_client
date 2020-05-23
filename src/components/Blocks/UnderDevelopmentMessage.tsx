import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Grid, Typography, } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& p": {
                color: "#ff7c00",
                fontSize: 12,
                paddingRight: 10,
            },
            "& svg": {
                fill: "#ff7c00",
                width: 12,
                height: 12,
            },
        },
    })
)

export default function UnderDevelopmentMessage() {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="center" className={classes.root}>
            <Typography>
                Under development
            </Typography>
            <BuildIcon />
        </Grid>
    )
}