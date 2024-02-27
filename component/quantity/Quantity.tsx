import React, { useState } from 'react';

import { ICCiSquarePlus, ICCiSquareMinus } from '@/utils/icons';

const Quantity = (props: any) => {

  const { setaddListItem } = props

  const [quantity, setQuantity] = useState<number>(1);


  const incressQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decressQuantity = () => {
    if (quantity == 0) {
    } else if (quantity > 1) {
      setQuantity((prev: number) => (prev - 1))
    } else {
      setaddListItem('')
    }
  }

  return (
    <>
      <div className='d-flex align-items-center bdr-w-1 br-6 br-solid brc-gray'>
        <span className='m-0 p-1 border-end' onClick={() => decressQuantity()}><ICCiSquareMinus /></span>
        <div
          className='m-0 p-1 border-0 text-center'
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
