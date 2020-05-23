import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',

            '& .MuiPaper-elevation1': {
                boxShadow: "none",
            },
            '& .MuiExpansionPanel-root:before': {
                backgroundColor: "transparent",
            },
            '& .MuiExpansionPanel-root.Mui-expanded': {
                margin: 0,
            },
            '& .MuiExpansionPanelSummary-content': {
                alignItems: 'center',

                '&.Mui-expanded': {
                    margin: '12px 0',
                }
            },
            '& .MuiExpansionPanelSummary-root.Mui-expanded': {
                minHeight: 48,
            },
            '& .MuiIconButton-root': {
                padding: 0,
            },
            '& svg': {
                fill: '#757575',
                width: 20,
                height: 20,
            },
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
            flexBasis: '33.33%',
            flexShrink: 0,
            paddingLeft: 15,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        details: {
            padding: 0,
        },
    }),
);

export default function ControlledExpansionPanels({ panels }: any) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {panels.map((panel: any, index: number) => {
                const id = `panel${index + 1}`
                return (
                    <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)} key={index}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={id + "bh-content"}
                            id={id + "bh-header"}
                        >
                            {panel.icon}
                            <Typography className={classes.heading}>{panel.summary}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>
                            {panel.details}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
        </div>
    );
}