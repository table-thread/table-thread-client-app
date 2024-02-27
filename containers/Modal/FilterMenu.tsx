import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomCheckbox from '@/component/checkbox/checkbox';


const FilterMenu = (props: any) => {

  const { filterOpen, setfilterOpen, children } = props

  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  const handleOk = () => {
    setfilterOpen(false);
  };

  const handleCancel = () => {
    setfilterOpen(false);
  };

  return (
    <Modal title="Filter" open={filterOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='mx-5 d-flex justify-content-between'>
        <p>Dirnks</p>
        <span>
          <CustomCheckbox />
        </span>
      </div>
      <div className='mx-5 d-flex justify-content-between'>
        <p>Pizaa</p>
        <span>
          <CustomCheckbox />
        </span>
      </div>
      <div className='mx-5 d-flex justify-content-between'>
        <p>Momos</p>
        <span>
          <CustomCheckbox />
        </span>
      </div>
      <div className='mx-5 d-flex justify-content-between'>
        <p>Burger</p>
        <span>
          <CustomCheckbox />
        </span>
      </div>
      <div className='mx-5 d-flex justify-content-between'>
        <p>Ice-Creem</p>
        <span>
          <CustomCheckbox />
        </span>
      </div>
      <div className='mx-5 d-flex justify-content-between'>
        <p>Coffe</p>
        <span>
          <CustomCheckbox />
        </span>
      </div>
    </Modal>
  )
}

export default FilterMenu;
