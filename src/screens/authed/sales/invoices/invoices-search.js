import React from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

function InvoicesSearch() {


    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    return (

        <Search
            placeholder="Search Invoices Numbers"
            onSearch={value => console.log(value)}
            style={{ width: "100%" }}
        />

    );
}

export default InvoicesSearch