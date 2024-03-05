import React, { useEffect, useState } from 'react';

import Quantity from '@/component/quantity/Quantity';

const TAG = 'VIEWCART PAGE: ';

const index = () => {

  const [cartItems, setCartItem] = useState<any[]>([])
  const [total, setTotal] = useState<any>(0)

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("cartData");
    if (dataFromLocalStorage) {
      const parseData = JSON.parse(dataFromLocalStorage)
      setCartItem(parseData)
      console.log(TAG, "getting selected deta ", parseData);

      parseData.map((item: any) => {
        const amount = item.price * item.quantity
        setTotal((prev: any) => prev + amount)
      })
    }
  }, [])

  function quantityOp(calledWith: any, itemId: any) {
    if (calledWith == 0) {

      const search = cartItems.findIndex((element: any) => element.id == itemId);
      // console.log(TAG + " finding ", search);
      if (search !== -1) {
        const tempObj = [...cartItems];
        const searchRs = tempObj.findIndex((element: any) => element.id == itemId);
        tempObj.splice(searchRs, 1);
        setCartItem(tempObj);
        setTotal(calcuTotal(tempObj));
      }

    } if (calledWith !== 0) {

      const search = cartItems.findIndex((element: any) => element.id == itemId);
      if (search !== -1) {
        const tempObj = [...cartItems];
        const searchObj = cartItems.find((element: any) => element.id == itemId);
        const searchRs = tempObj.findIndex((element: any) => element.id == itemId);
        searchObj.quantity = Number(calledWith);
        tempObj[searchRs] = searchObj;
        console.log(TAG + " finding new items ", tempObj);
        setCartItem(tempObj);
        setTotal(calcuTotal(tempObj));
      }
    }
  }

  const calcuTotal = (itemList: any) => {
    let totalAmount: number = 0;
    itemList.forEach((item: any) => {
      totalAmount = totalAmount + Number(Number(item?.quantity) * item?.price);
    })
    return Number(totalAmount);
  }

  const orderitems = () => {
    const oderData = { orderItem: { cartItems }, totalAmount: {total}}
    // console.log(TAG, ' ', oderData);
    localStorage.setItem("oderItems", JSON.stringify(oderData));
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-md-5 col-sm-12 col-12 bdr-w-1 br-6 br-solid brc-gray m-4 p-4'>
        <div className='row'>
          <div className='col-3 fw-bold'>Product</div>
          <div className='col-3 fw-bold'>Varient</div>
          <div className='col-3 fw-bold'>Quantity</div>
          <div className='col-3 fw-bold'>price</div>
        </div>

        {cartItems.length > 0 && cartItems.map((item: any, index: number) => {
          return (
            <div key={index} id={item.id} className='row my-2'>
              <div className='col-3'>{item.item}</div>
              <div className='col-3'>{item.varient}</div>
              <div className='col-3'>
                <Quantity quantity={item.quantity} setQuantity={(quantity: number) => quantityOp(quantity, item.id)} />
              </div>
              <div className='col-3'>{item.price * item.quantity}</div>
            </div>
          )
        })}

        <div className='row justify-content-between border-top mb-3'>
          <div className='col-6 fw-bold'>Total</div>
          <div className='col-3 fw-bold'>{total}</div>
        </div>
        <div className='br-6 p-2 bg-red text-center' onClick={orderitems}>Proceed to Order </div>
      </div>
    </div>
  )
}

export default index
