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
      // console.log(TAG, "getting selected deta ", parseData);

      setTotal(calcuTotal(parseData));
    }
  }, [])

  function quantityOp(calledWith: any, itemId: any, index: any) {
    if (calledWith == 0) {

      const search = cartItems.findIndex((element: any) => element.id == itemId);
      // console.log(TAG + " finding ", search);
      if (search !== -1) {
        const tempObj = [...cartItems];
        const searchObj = tempObj.find((element: any) => element.id == itemId);
        const searchRs = tempObj.findIndex((element: any) => element.id == itemId);
        const varientArray = searchObj.varients;
        console.log(TAG + " finding tt", searchObj);
        if (varientArray.length == 1) {
          tempObj.splice(searchRs, 1);
          setCartItem(tempObj);
        } if (varientArray.length >= 2) {
          const tempVarObj = [...varientArray];
          const searcVarhObj = tempVarObj.find((element: any, idx: any) => idx == index);
          const searcVarhRs = tempVarObj.findIndex((element: any, idx: any) => idx == index);
          console.log(TAG + " finding cct", tempVarObj);

          tempVarObj.splice(searcVarhRs, 1);
          searchObj.varients = tempVarObj
          tempObj[searchRs] = searchObj;
          setCartItem(tempObj);
          console.log(TAG + " finding cct", tempObj);
        };

        // setTotal(calcuTotal(tempObj));
      };

    } if (calledWith !== 0) {

      const search = cartItems.findIndex((element: any) => element.id == itemId);
      if (search !== -1) {
        const tempObj = [...cartItems];
        const searchObj = cartItems.find((element: any) => element.id == itemId);
        const searchRs = tempObj.findIndex((element: any) => element.id == itemId);
        const varObj = [...searchObj.varients]
        console.log(TAG + " finding new items ", varObj.length);
        searchObj.quantity = Number(varObj.length);
        const searchVarObj = varObj.find((element: any, idx: number) => idx == index);

        searchVarObj.quantity = Number(calledWith);
        console.log(TAG + " finding new items ", (searchVarObj));
        tempObj[searchRs] = searchObj;
        setCartItem(tempObj);
        console.log(tempObj);

        setTotal(calcuTotal(tempObj));
      };
    };
  };

  const calcuTotal = (itemList: any) => {
    let totalAmount: number = 0;

    itemList.map((element: any) => {
      element.varients.forEach((item: any) => {
        totalAmount = totalAmount + Number(Number(item?.quantity) * item?.price);
      })
    })
    return Number(totalAmount);
  }

  const orderitems = () => {
    const oderData = { orderItem: { cartItems }, totalAmount: { total } }
    // console.log(TAG, ' ', oderData);
    localStorage.setItem("oderItems", JSON.stringify(oderData));
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-md-5 col-sm-12 col-12 bdr-w-1 br-6 br-solid brc-gray m-4 p-4'>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead className=''>
              <tr>
                <th>Product</th>
                <th>Varient</th>
                <th>Quantity</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 && cartItems.map((item: any, index: number) => (

                (item.varients).map((element: any, idx: number) => {
                  // console.log('testinggggggggg', element);
                  return (
                    <tr key={idx} id={item.id} className=''>
                      <td className='col-3'>{item.item}</td>
                      <td className='col-3'>{element.variant}</td>

                      <td className='col-3'>
                        <Quantity quantity={element.quantity} setQuantity={(quantity: any) => quantityOp(quantity, item.id, idx)} />
                      </td>
                      <td className='col-3'>{element.price * element.quantity}</td>
                    </tr>
                  )

                })
              )
              )}
            </tbody>
            <thead>
              <tr className=''>
                <th className=''>Total</th>
                <th></th>
                <th></th>
                <th className=''>{total}</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className='d-flex justify-content-center mb-3'>
          <button className='btn btn-danger px-5' onClick={orderitems}>Proceed to Order </button>
        </div>
      </div>
    </div>
  )
}

export default index
