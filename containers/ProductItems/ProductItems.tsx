import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';

import AddItem from '../Modal/AddItem';

// import Quantity from '@/component/quantity/Quantity';
import ItemDetails from '../Modal/itemDetails';

const TAG = "Product Item Page: ";
const ProductItems = (props: any) => {

  const { item, idx, viewCart, setViewCart, product } = props;

  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [variants, setvariants] = useState<any[]>([]);

  useEffect(() => {
    const selectedCartItem = viewCart.find((item: any) => item.id === idx);
    // console.log(TAG, 'viewCart find', viewCart);

    if (selectedCartItem) {
      setSelectedItem(selectedCartItem.id);
      // setQuantity(selectedCartItem.quantity);
    } else {
      setSelectedItem(null);
    }
  }, [viewCart, product]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = (calledWith: any, varientPrice: number) => {
    // console.log(TAG + " selected varient of item ", calledWith);
    setIsModalOpen(false);
    setSelectedItem(item.id)

    const selectVariant = {
      variant: calledWith,
      price: varientPrice,
      quantity: 1
    };

    handleSelectedItem(calledWith, selectVariant);
  };

  const handleSelectedItem = (calledWith: any, selectVariant: object) => {
    const itemData = {
      id: idx,
      item: item.productName,
      varients: [selectVariant],
    };
    if (viewCart.length !== 0) {
      const search = viewCart.findIndex((element: any) => element.id == idx);
      if (search !== -1) {
        const tempObj = [...viewCart];
        const searchObj = viewCart.find((element: any) => element.id == idx);
        // console.log(TAG + " finding searchObj", searchObj);

        if (searchObj.varients.length !== 0) {
          const serchVar = searchObj.varients
          const searchV = serchVar.findIndex((element: any) => element.variant == calledWith);

          if (searchV == -1) {
            setvariants([...variants, selectVariant]);
            itemData.varients = [...variants, selectVariant]
            tempObj.splice(search, 1);
            setViewCart([...tempObj, itemData]);
            // console.log(TAG + " finding tempObjvar", [...tempObj, itemData]);
          }
        }
      } else {
        setViewCart([...viewCart, itemData]);
        // const search = viewCart.filter((element: any) => element.id == idx);
      }
    } else {
      setvariants([selectVariant]);
      setViewCart([...viewCart, itemData]);
      const search = viewCart.filter((element: any) => element.id == idx);
    }
  }


  return (
    <>
      <div className=' bdr-w-1 br-6 br-solid brc-gray d-flex p-relative'>
        <div className='d-flex justify-content-center'>
          <img
            className='h-125 obj-cover bdr-w-1 br-6 br-solid brc-gray'
            src={item.image}
            alt="product image"
          />
          <div
            className='w-90 bg-light-red p-2 py-1 text-center br-6 fw-bold p-absolute p-bd-14 '
            onClick={() => setIsModalOpen(true)}
          >
            Add +
          </div>
        </div>

        <div className='px-3'>
          <div className='  fs-18 fw-bold'>{item.productName}</div>
          <p className='lh-20 fs-14 tc-grey my-0'>
            {item.productDiscription ? item.productDiscription.slice(0, 55) : ""} ...
            <span className='fw-bold'>more</span>
          </p>
          <p className='my-1'><span className='fw-bold'>Amount: </span> {item.amount} Rs.</p>
        </div>
      </div>

      <AddItem
        itemDetails={item}
        varientItem={item.productVarient}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      // productName={item.productName}
      />
      <ItemDetails />
    </>
  )
}

export default ProductItems;
