import React from 'react';
import '../../main/styles.scss';
import {useSelector} from 'react-redux';
function Sidebar() {
    const stateSidebar = useSelector((state) => state.sidebar);
    const {toggle_sidebar} = stateSidebar;
    console.log(stateSidebar);
    return (
        <>
            <div className='sidebar'>sidebar</div>
        </>
    );
}

export default Sidebar;
