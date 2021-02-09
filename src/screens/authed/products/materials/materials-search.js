import React from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

function MaterialsSearch() {


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
            placeholder="Search Materials"
            onSearch={value => console.log(value)}
            style={{ width: "100%" }}
        />

    );
}

export default MaterialsSearch