import React from "react";
import Authentication from '../../../src/services/authentication';
import AdminPage from  "../../../src/containers/admin"

interface StatelessPage<P = {}> extends React.SFC<P> {
    getInitialProps?: (ctx: any) => Promise<P>
}

const Dashboard: StatelessPage<{}> = ({ auth }: any) => {
    return (
        <AdminPage auth={auth}>
            <div>...</div>
        </AdminPage>
    );
};

Dashboard.getInitialProps = async (ctx: any) => {
    const auth = await Authentication.getSession(ctx);
    return auth;
}

export default Dashboard;