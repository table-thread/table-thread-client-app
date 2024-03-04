import React, { useEffect, useState } from 'react';

import AddItem from '../Modal/AddItem';

import Quantity from '@/component/quantity/Quantity';

const TAG = "Product Item Page: ";
const ProductItems = (props: any) => {

  const { item, idx, viewCart, setViewCart } = props;

  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    quantityOp(quantity);
  }, [quantity]);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function quantityOp(calledWith: any) {
    if (calledWith == 0) {
      setSelectedItem(null);

      const search = viewCart.findIndex((element: any) => element.id == idx);
      console.log(TAG + " finding ", search);
      if (search !== -1) {
        console.log(TAG + " remove process ");
        const tempObj = [...viewCart];
        console.log(TAG + " working on ", tempObj);
        const searchRs = tempObj.findIndex((element: any) => element.id == idx);
        console.log(TAG + " searchRs ", searchRs);
        tempObj.splice(searchRs, 1);
        console.log(TAG + " tempObj ", tempObj);
        setViewCart(tempObj);
      }

    } else {

      const search = viewCart.findIndex((element: any) => element.id == idx);
      // console.log(TAG + " finding ", search);
      if (search !== -1) {
        // console.log(TAG + " finding ", search);
        const tempObj = [...viewCart];
        console.log(TAG + " tempObj ", tempObj);
        const searchObj = viewCart.find((element: any) => element.id == idx);
        const searchRs = tempObj.findIndex((element: any) => element.id == idx);
        searchObj.quantity = Number(calledWith);
        tempObj[searchRs] = searchObj;
        setViewCart(tempObj);
      }

    }
  }

  const handleOk = (calledWith: any, varientPrice:number) => {
    // console.log(TAG + " selected varient of item ", calledWith);
    setIsModalOpen(false);
    setQuantity(1);
    setSelectedItem(item);

    const itemData = {
      id: idx,
      item: item.productName,
      varient: calledWith,
      quantity: 1,
      price: varientPrice,
    }

    setViewCart([...viewCart, itemData]);

  };


  // console.log(TAG + " item self ", item);
  // console.log(TAG + " idx ", idx);
  console.log(TAG + " viewCart ", viewCart);
  // console.log(TAG + " quantity ", quantity);
  // console.log(viewCart.length);


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
                {selectedItem !== null ?
                  <Quantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  :
                  <div
                    className='p-1 my-2 text-center bdr-w-1 br-6 br-solid brc-gray fw-bold'
                    onClick={() => setIsModalOpen(true)}
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
        varientItem={item.productVarient}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        productName={item.productName}
      />
    </>
  )
}

export default ProductItems;
