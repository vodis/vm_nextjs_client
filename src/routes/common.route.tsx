import React from 'react';
import { withRouter } from 'next/router';

type WithRouterProps = {
    router?: object | any;
};

const CombineRoutes: React.FunctionComponent<WithRouterProps> = ({
    router,
    children
}) => {

    const cookies = false ? true: 'common';
    let routes: string | undefined = cookies && !router.pathname.match(/adm_pFvxr3c~R/) ? 'user': 'admin';
    switch (routes) {
        case 'user':
            console.log('@Route to User');
            break;
        case 'admin':
            console.log('@Route to Admin');
            break;
        default:
            console.log('@Route to Common')
    }

    return (
        <>
           { children } 
        </>
    )
};

export default withRouter(CombineRoutes);
