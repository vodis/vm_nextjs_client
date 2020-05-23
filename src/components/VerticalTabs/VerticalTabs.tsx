import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        width: '100%',
        height: 'auto',

        '& .MuiTabs-scroller .MuiTabs-indicator': {
            left: 0,
            right: 'auto',
        },
        '& .MuiTabs-vertical': {
            width: '100%',
        },
        '& .MuiTab-wrapper': {
            alignItems: 'start',
            paddingLeft: 30,
            fontSize: 12,
            textTransform: 'none',
        },
        '& .MuiTab-root': {
            minHeight: 30,
        },
    },
    tabs: {
        // borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs({ children }: any) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >

                {children.map((tab: any, index: number) => {
                    const label = tab.props.children;
                    return (
                        <Tab label={label} {...a11yProps(index)} key={index} />
                    )})
                }
            </Tabs>
        </div>
    );
}