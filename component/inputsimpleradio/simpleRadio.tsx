/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const SimpleRadio = (props: any) => {

  const { options, value, setValue, disabled, rowSyncId = "", localStorageItem = "" } = props;



  const onChange = (e: RadioChangeEvent) => {
    // console.log('radio checked', e.target.value);

    if (rowSyncId && localStorageItem) {
      localStorage.removeItem(localStorageItem)
      const indtrack: any = document.getElementById(rowSyncId);
      indtrack.innerHTML = String(0);
    }

    setValue(e.target.value);
  };


  return (
        <Radio.Group onChange={onChange} value={value} disabled={disabled} >
          {options.map((item: { value: string, label: string }, index: number) => {
            return (
              <Radio key={index} value={item.value}>{item.label}</Radio>
            )
          })}
        </Radio.Group>
  );

}

export default SimpleRadio;