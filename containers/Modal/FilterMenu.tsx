import React, { useState } from 'react';
import { Modal } from 'antd';

import InputRadio from '@/component/inputradio/InputRadio';
import CustomCheckbox from '@/component/checkbox/checkbox';


const TAG = "FILTER PAGE:  ";
const FilterMenu = (props: any) => {

  const { filterOpen, setfilterOpen, setProduct, dummyData, viewCart } = props

  const [catogory, setCatogory] = useState<any>('select All');


  const filterTitles = ['select All', "fast food", "drink", "noodles", "breakfast", "lunch", "dinner"];

  const handleOk = () => {
    if (catogory !== 'select All') {
      const filterProduct = dummyData.filter((item: any) => item.category == catogory);
      // console.log(TAG, 'FILTER CATEGORY ', filterProduct);
      setProduct(filterProduct);
      handleCancel();
      // localStorage.setItem("cartData", JSON.stringify(viewCart));
      // localStorage.setItem("cartStore", JSON.stringify(viewCart));
    } else {
      setProduct(dummyData);
      // setViewCart(viewCart)
      handleCancel();
      // localStorage.setItem("cartData", JSON.stringify(viewCart));
      // localStorage.setItem("cartStore", JSON.stringify(viewCart));
    }
  };

  const handleCancel = () => {
    setfilterOpen(false);
  };

  console.log(TAG, ' filterpage viewcart', viewCart);
  console.log(TAG, ' catogory', catogory);
  console.log(TAG, ' dummyData', dummyData);

  return (
    <Modal title="Filter" open={filterOpen} onOk={handleOk} onCancel={handleCancel}>
      {filterTitles.map((item: any, index: number) => {
        return (
          <div className='' key={index}>
            <InputRadio
              options={[{ value: item, label: item }]}
              value={catogory}
              setValue={setCatogory}
            />
          </div>
        )
      })}
    </Modal>
  )
}

export default FilterMenu;
