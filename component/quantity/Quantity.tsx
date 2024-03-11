import React, { useState } from 'react';

import { ICCiSquarePlus, ICCiSquareMinus } from '@/utils/icons';

const Quantity = (props: any) => {

  const { quantity, setQuantity } = props

  const decressQuantity = () => {
    setQuantity(quantity - 1);
  }

  const incressQuantity = () => {
    setQuantity((quantity == null ? 0 : quantity) + 1);
    // console.log(quantity + 1);
  }

  return (
    <>
      <div className='d-flex align-items-center bdr-w-1 br-6 br-solid brc-gray'>
        <span className='m-0 p-1 border-end' onClick={() => decressQuantity()}><ICCiSquareMinus /></span>
        <div
          className='m-0 p-1 text-center'
          style={{ width: 40 }}
        >
          {quantity}
        </div>
        <span className='m-0 p-1 border-start' onClick={() => incressQuantity()}><ICCiSquarePlus /></span>
      </div>
    </>
  )
}

export default Quantity;
