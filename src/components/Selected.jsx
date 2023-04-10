import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;
const arr = ['COMPSCI 732','COMPSCI 760','STATS 779'];

export default function Selected() {
  const [selectValue, setSelectValue] = useState([undefined]);
  const [textSelected, setTextSelected] = useState("");
  const changeHandle = (value) => {
    setSelectValue([value]);
    setTextSelected(value);
    console.log(value, 'value-change');
    setTimeout("window.location.reload();",2000);
    
  };

  return (
    <div>
      <Select
        allowClear
        showSearch
        showArrow
        placeholder="COMPSCI 732"
        onChange={changeHandle}
        style={{ width: 160 }}
        value={selectValue[0]}
      >
        {arr.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <div style={{textAlign: 'center', color: 'rgb(6, 6, 43)'}}>{textSelected}</div>
    </div>

  );
}

