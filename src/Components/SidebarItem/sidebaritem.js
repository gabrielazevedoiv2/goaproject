import React from 'react';

export default function SidebarItem (props) {
    return (
        <div className="sidebar-item main">
            <div className="height-100 flex">
                <div className="flex-center" style={{width: '33%'}}>
                    {props.icon}
                </div>
                <div className="flex-left" style={{width: '100%'}}>                    
                    {props.content}
                </div>
            </div>
        </div>
    )
}
