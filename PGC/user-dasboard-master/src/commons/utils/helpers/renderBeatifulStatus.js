import React from "react";
import { Tag } from "antd";

export default function renderBeatifulStatus(status) {
    status = String(status).toLocaleLowerCase();
    switch (status) {
        case 'success': {
            return <Tag color="green">Success</Tag>;
        }
        case 'pending': {
            return <Tag color="blue">Pending</Tag>;
        }
        case 'failure': {
            return <Tag color="red">Success</Tag>;
        }
        default:
            return <Tag color="#666">Unknow</Tag>;
    }

}
