import React from 'react'
import { Select } from 'antd';

const { Option, OptGroup } = Select;

function LocationSelect(props) {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Select defaultValue="All" style={{ width: "100%" }} onChange={handleChange}>
            <Option value="All" style={{fontFamily:"MontserratMedium"}}>All</Option>
            <Option value="Lorem Ipsum" style={{fontFamily:"MontserratMedium"}}>Lorem Ipsum</Option>
        </Select>
    );
}

export default LocationSelect