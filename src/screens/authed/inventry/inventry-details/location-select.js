import React from 'react'
import { Select } from 'antd';

const { Option, OptGroup } = Select;

function LocationSelect(props) {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Select defaultValue="Default Location" style={{ width: "100%" }} onChange={handleChange}>
            <Option value="Default Location" style={{fontFamily:"MontserratMedium"}}>Default Location</Option>
            <Option value="Lorem Ipsum" style={{fontFamily:"MontserratMedium"}}>Al Shahama</Option>
        </Select>
    );
}

export default LocationSelect