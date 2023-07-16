import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const Fillter = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Fillter
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                open={open}
            >
                <p>fillter</p>
                <p>fillter</p>
                <p>fillter</p>
            </Drawer>
        </>
    );
};
export default Fillter;
