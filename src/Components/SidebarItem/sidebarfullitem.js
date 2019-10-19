import React from 'react';

export default function SidebarFullItem (props) {
    return (
        <div className={"sidebar-full-item " + props.colorClass || "main"}>
            <div className="height-100 flex">
                <div className="flex-center" style={{width: '100%'}}>                    
                    {props.content}
                </div>
            </div>
        </div>
    )
}
