import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UserHome from './UserHome';
import AdminHome from './AdminHome';
import AgentHome from './AgentHome';
// import UserHome from './UserHome';
// import AdminHome from './AdminHome';
// import AgentHome from './AgentHome';

const RoleBasedHome = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>; // or redirect to login if user is not defined
    }

    switch (user.role) {
        case 'user':
            return <UserHome />;
        case 'admin':
            return <AdminHome />;
        case 'agent':
            return <AgentHome />;
        default:
            return <div>Unauthorized</div>; // or handle unauthorized access
    }
};

export default RoleBasedHome;
