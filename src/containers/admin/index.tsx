import React from "react";

import Wrapper from "../../../src/components/Wrapper/Wrapper";
import ControlPanel from "../../../src/components/ControlPanel/ControlPanel";
import AdminNavbar from "../../../src/components/AdminNavbar/AdminNavbar"
import { VoMariLogo } from "../../../static/img/logo";

import useStyles from "./styles"

const AdminPage = ({ auth, children }: any) => {
    const classes = useStyles();
    const userIcon = "https://i.pinimg.com/originals/e5/a1/f4/e5a1f46df06224b572fd3ee3451244b4.jpg"

    return (
        <Wrapper auth={auth}>
            <div className={classes.root}>
                <div className={classes.navbarVertical}>
                    <div className={classes.logo}>
                        <VoMariLogo width={200} height={80} />
                    </div>
                    <AdminNavbar userIcon={userIcon} />
                    <ControlPanel />
                </div>
                <div className={classes.main}>{children}</div>
            </div>
        </Wrapper>
    );
};

export default AdminPage