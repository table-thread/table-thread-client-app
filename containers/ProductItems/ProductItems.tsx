import React, { useState } from 'react';

import AddItem from '../Modal/AddItem';
import Quantity from '@/component/quantity/Quantity';
import CardBox from '@/component/card/CardBox';


const ProductItems = (props: any) => {

  const { item } = props;

  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [addListItem, setaddListItem] = useState<any>('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setaddListItem(1)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='py-3 bdr-w-1 br-6 br-solid brc-gray'>
        <img
          className='h-200 w-100 obj-cover'
          src={item.image}
          alt="product image"
        />

        <div className='px-3'>
          <div className=' mt-2 fs-18 fw-bold'>{item.productName}</div>
          <p className='lh-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic modi non facere earum.</p>
          <div className='d-flex justify-content-between'>
            <div>
              <p className='m-0'><span className='fw-bold'>Categery: </span> {item.category}</p>
              <p className='m-0'><span className='fw-bold'>Type: </span> {item.productType}</p>
              <p className='m-0'><span className='fw-bold'>Amount: </span> {item.amount}</p>
            </div>
            <div>
              <div>
                {addListItem ?
                  <Quantity setaddListItem={setaddListItem} />
                  :
                  <div
                    className='p-1 my-2 text-center bdr-w-1 br-6 br-solid brc-gray fw-bold'
                    onClick={showModal}
                  >
                    Add +
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddItem
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default ProductItems;
