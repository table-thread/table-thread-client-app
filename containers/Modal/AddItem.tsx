import React, { useEffect, useState } from 'react';

import { Modal } from 'antd';
import InputRadio from '@/component/inputradio/InputRadio';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';

const TAG = "Add Item Modal: ";
const AddItem = (props: any) => {

  const { isModalOpen, handleOk, handleCancel, varientItem, productName } = props;

  const [varient, setVarient] = useState<string>("small");
  const [varientPrice, setVarientPrice] = useState<number>();

  // const varientList = [
  //   { value: "small", label: "small", price: 35 },
  //   { value: "medium", label: "medium", price: 45 },
  //   { value: "large", label: "large", price: 55 },
  //   { value: "special", label: "special", price: 65 }
  // ]

  useEffect(() => {
    setVarient(varientItem[0].value);
    setVarientPrice(varientItem[0].Price);
  }, [])

  const handleVarientChange = (value: string, price: number) => {
    setVarient(value);
    setVarientPrice(price);
  };

  // console.log(TAG + " selected price varient ", varientItem);
  // console.log(TAG + " selected ", varient);

  return (
    <Modal
      title="Basic
      Modal"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <div className='mx-5 my-3 '>
        <p className='mx-0'>{productName}</p>
        <div className='col-12'>

          {varientItem.map((item: any, index: number) => {
            return (
              <div className='d-flex' key={index}>
                <div className='col-6'>
                  <InputRadio
                    options={[{ value: item.varient, label: item.varient }]}
                    value={varient}
                    // setValue={setVarient}
                    setValue={(setVarient: any) => handleVarientChange(setVarient, item.Price)}
                  />
                </div>
                <div className='mt-4'>{`${item.Price} Rs.`}</div>
              </div>
            )
          })
          }

        </div>
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
        onClickEvent={handleOk.bind('', varient, varientPrice)}
      />
    </Modal>
  )
}

export default AddItem
