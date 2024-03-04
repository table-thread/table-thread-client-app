import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomCheckbox from '@/component/checkbox/checkbox';
import InputRadio from '@/component/inputradio/InputRadio';


const TAG = 'FILTER PAGE  ';

const FilterMenu = (props: any) => {

  const { filterOpen, setfilterOpen, children, product, setProduct, dummyData } = props

  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [catogory, setCatogory] = useState<any>(null);

  console.log(TAG, ' filterpage', dummyData);


  const handleOk = () => {
    if (catogory !== null) {
      const filterProduct = product.filter((item: any) => item.category == catogory)
      console.log(TAG, 'FILTER CATEGORY ', filterProduct);
      setProduct(filterProduct)
      setfilterOpen(false);
    } else {
      setProduct(product)
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
      {product.map((item: any, index: number) => {
        return (
          <div className='' key={index}>
            <InputRadio
              options={[{ value: item.category, label: item.category }]}
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
