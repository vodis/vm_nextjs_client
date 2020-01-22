import dynamic from 'next/dynamic';

export const CombineRoutes = dynamic(() => import("../routes/common.route"));