import React from 'react';
import UserPhoto from './UserPhoto';
import UserName from './UserName';
import UserNick from './UserNick';
import UserStatistick from './UserStatistick';


const SideBar = () => {
    return (
        <aside className="sidebar">
            <UserPhoto />
            <UserName />
            <UserNick />
            <UserStatistick />
        </aside>
    );
}

export default SideBar;