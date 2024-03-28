import React, { useState } from 'react';
import { Modal } from 'antd';

// import InputRadio from '@/component/inputradio/InputRadio';
// import CustomCheckbox from '@/component/checkbox/checkbox';
import SimpleRadio from '@/component/inputsimpleradio/simpleRadio';


const TAG = "FILTER PAGE:  ";
const FilterMenu = (props: any) => {

  const { filterOpen, setfilterOpen, setProduct, dummyData, viewCart } = props

  const [catogory, setCatogory] = useState<any>('select All');


  const filterTitles = ['select All', "Fast food", "Drink", "Noodles", "Breakfast", "Lunch", "Dinner"];

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

  return (
    <Modal open={filterOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="fw-bold fs-18 text-center my-1 ff-r">Filter</div>
      {filterTitles.map((item: any, index: number) => {
        return (
          <div
            className='d-flex justify-content-between my-2 px-2 ff-r'
            key={index}
            onClick={() => setCatogory(item)}
          >
            <div className='col-5'>{item}</div>
            {/* <div className='col-3'>{dummyData.length}</div> */}
            <SimpleRadio
              options={[{ value: item }]}
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
