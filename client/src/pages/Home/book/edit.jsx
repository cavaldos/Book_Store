import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Edit = () => {
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setModal2Open(true)}>
                Edit
            </Button>
            <Modal
                title="V"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};
export default Edit;
