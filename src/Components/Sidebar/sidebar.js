import React from 'react';
import {Link} from "react-router-dom";
import SidebarItem from '../SidebarItem/sidebaritem';
import SidebarFullItem from '../SidebarItem/sidebarfullitem';

export default function Sidebar (props) {
    return (
        <div className="sidebar main full-height">
            <SidebarFullItem colorClass={"primary"} content={"Athena Project"}></SidebarFullItem>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">dashboard</i>} content={"Dashboard"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">description</i>} content={"Backlog"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">view_module</i>} content={"Board"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">calendar_today</i>} content={"Schedule"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">trending_up</i>} content={"Reports"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">done_all</i>} content={"Releases"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">feedback</i>} content={"Issues"}></SidebarItem></Link>
            <Link to="/dashboard"><SidebarItem icon={<i class="material-icons">settings_applications</i>} content={"Settings"}></SidebarItem></Link>
            {props.children}
        </div>
    )
}
