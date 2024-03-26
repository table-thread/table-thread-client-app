import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

import ButtonSimple from '@/component/buttonsimple/buttonsimple';

const TAG = "Add Item Modal: ";
const ItemDescription = (props: any) => {

  const { isModalOpen, handleOk, handleCancel, varientItem, itemDetails } = props;



  // console.log(TAG + " selected price varient ", varientItem);
  // console.log(TAG + " selected ", varient);

  return (
    <Modal
      title=""
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      className='ff-r'
    >
      <div className='my-3'>
        <p className='mx-0 fw-bold fs-18'>{itemDetails.productName}</p>
        <div className='col-12 bg-w bdr-w-1 br-6 br-solid brc-w px-2'>

          {varientItem.map((item: any, index: number) => {
            return (
              <div className='d-flex align-items-center gap-2 my-2' key={index}>

                {itemDetails.productType == 'Veg' ?
                  <div className='bg-w bdr-w-1 br-6 br-solid brc-green p-1'>
                    <div className="bg-green br-50 p-1"></div>
                  </div>
                  :
                  <div className='bg-w bdr-w-1 br-6 br-solid brc-red p-1'>
                    <div className="bg-red br-50 p-1"></div>
                  </div>
                }

                <div className='col-7 px-2'>{item.varient}</div>
                <div className='col-2'>{`${item.Price} Rs.`}</div>
                
              </div>
            )
          })
          }
        </div>
      </div>

      <ButtonSimple
        title="Add Item"
        type="btn btn-primary me-3"
        disabled={false}
        onClickEvent={handleOk}
      />
    </Modal>
  )
}

export default ItemDescription
