import React from 'react';
import ExpansionPanels from '../ExpansionPanels/ExpansionPanels'
import VerticalTabs from '../VerticalTabs/VerticalTabs'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import UnderDevelopmentMessage from '../Blocks/UnderDevelopmentMessage';

const ControlPanel = () => {
    const panels = [
        {
            icon: <HomeOutlinedIcon />,
            summary: "Dashboards",
            details: (
                <VerticalTabs>
                    <span>Default</span>
                    <span>Project Managment</span>
                    <span>E-Commerce</span>
                </VerticalTabs>
            ),
        },
        {
            icon: <DnsOutlinedIcon />,
            summary: "Сatalog",
            details: (
                <VerticalTabs>
                    <span>Category</span>
                    <span>Products</span>
                </VerticalTabs>
            ),
        },
        {
            icon: <PermIdentityOutlinedIcon />,
            summary: "Managing",
            details: (
                <UnderDevelopmentMessage />
            ),
        }
    ]

    return (
        <div>
            <ExpansionPanels panels={panels} />
        </div>
    )
};

export default ControlPanel;
