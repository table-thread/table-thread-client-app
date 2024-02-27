import React, { useState } from 'react';

import { Modal } from 'antd';
import InputRadio from '@/component/inputradio/InputRadio';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';

const AddItem = (props: any) => {

  const { isModalOpen, handleOk, handleCancel } = props;

  const submithandler = () => {
    console.log("add item");
  }

  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <div className='mx-5 d-flex justify-content-between align-items-center'>
        <p>Dirnks</p>
        <span>
          <InputRadio options={[{value:'1323'}]}/>
        </span>
      </div>
      <p>Some contents...</p>
      <div className='col-3'>
      </div>
      <ButtonSimple
        title="Cancel"
        type="btn btn-primary me-3"
        disabled={false}
        onClickEvent={handleCancel}
      />
      <ButtonSimple
        title="Submit"
        type="btn btn-primary me-3"
        disabled={false}
        onClickEvent={handleOk}
      />
    </Modal>
  )
}

export default AddItem
