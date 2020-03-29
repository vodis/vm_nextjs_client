import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, SvgIcon } from '@material-ui/core';

import Wrapper from "../../src/components/Wrapper/Wrapper";
import Authentication from "../../src/services/authentication";
import ControlPanel from "../../src/components/ControlPanel/ControlPanel";
import AdminNavbar from "../../src/components/AdminNavbar/AdminNavbar"
import { VoMariLogo } from "../../static/img/logo";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: "100vh"
    },
    navbarVertical: {
        width: "100%",
        maxWidth: 250,
        borderStyle: "solid",
        borderWidth: "0px 1px 0px 0px",
        borderColor: "#e3ebf6"
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 1.25 + "rem",
        paddingBottom: 1.25 + "rem",
    },
}));

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Dashboard: StatelessPage<{}> = ({ auth }: any) => {
    const classes = useStyles();

    return (
        <Wrapper auth={auth}>
            <div className={classes.root}>
                <div className={classes.navbarVertical}>
                    <div className={classes.logo}>
                        <VoMariLogo width={200} height={80} />
                    </div>
                    <AdminNavbar />
                    <ControlPanel />
                </div>
                <div>panel</div>
            </div>
        </Wrapper>
    );
};

Dashboard.getInitialProps = async (ctx: any) => {
  const auth = await Authentication.getSession(ctx);
  return auth;
};

export default Dashboard;
