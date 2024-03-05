import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomCheckbox from '@/component/checkbox/checkbox';
import InputRadio from '@/component/inputradio/InputRadio';


const TAG = 'FILTER PAGE  ';

const FilterMenu = (props: any) => {

  const { filterOpen, setfilterOpen, children, setProduct, dummyData } = props

  const [catogory, setCatogory] = useState<any>(null);

  console.log(TAG, ' filterpage', dummyData);

  const filterTitles = ["fast food", "drink", "noodles", "breakfast", "lunch", "dinner"]

  const handleOk = () => {
    if (catogory !== null) {
      const filterProduct = dummyData.filter((item: any) => item.category == catogory)
      console.log(TAG, 'FILTER CATEGORY ', filterProduct);
      setProduct(filterProduct)
      setfilterOpen(false);
    } else {
      setProduct(dummyData)
      setfilterOpen(false);
    }
  };

  const handleCancel = () => {
    setfilterOpen(false);
  };

  return (
    <Modal title="Filter" open={filterOpen} onOk={handleOk} onCancel={handleCancel}>
      <InputRadio
        options={[{ value: null, label: 'select All' }]}
        value={catogory}
        setValue={setCatogory}
      />
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
      })
      }
    </Modal>
  )
}

export default FilterMenu;
