import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Quantity from '@/component/quantity/Quantity';
import Link from 'next/link';
import Item from 'antd/es/list/Item';

const TAG = "VIEW CART ITEMS LIST: ";

const ViewCartList = (props: any) => {

  const { viewCartOpen, setViewCartOpen, viewCart, setViewCart } = props;

  const handleCancel = () => {
    setViewCartOpen(false)
  }

  const [cartItems, setCartItem] = useState<any[]>([])

  useEffect(() => {

    setCartItem(viewCart)
    console.log(TAG, ' viewcartttttt ', viewCart);

  }, [viewCart])

  function quantityOp(calledWith: any, itemId: any, index: any) {
    if (calledWith == 0) {

      const search = cartItems.findIndex((element: any) => element.id == itemId);
      // console.log(TAG + " finding ", search);
      if (search !== -1) {
        const tempObj = [...cartItems];
        const searchObj = tempObj.find((element: any) => element.id == itemId);
        const searchRs = tempObj.findIndex((element: any) => element.id == itemId);
        const varientArray = searchObj.varients;
        // console.log(TAG + " finding searchObj", searchObj);
        if (varientArray.length == 1) {
          tempObj.splice(searchRs, 1);
          setViewCart(tempObj);
        } if (varientArray.length >= 2) {
          const tempVarObj = [...varientArray];
          const searcVarhObj = tempVarObj.find((element: any, idx: any) => idx == index);
          const searcVarhRs = tempVarObj.findIndex((element: any, idx: any) => idx == index);
          // console.log(TAG + " finding tempVarObj", tempVarObj);

          tempVarObj.splice(searcVarhRs, 1);
          searchObj.varients = tempVarObj
          tempObj[searchRs] = searchObj;
          setViewCart(tempObj);
        };
      };

    } if (calledWith !== 0) {
      const search = cartItems.findIndex((element: any) => element.id == itemId);
      if (search !== -1) {
        const tempObj = [...cartItems];
        const searchObj = cartItems.find((element: any) => element.id == itemId);
        const searchRs = tempObj.findIndex((element: any) => element.id == itemId);
        const varObj = [...searchObj.varients]
        // console.log(TAG + " finding new items ", varObj.length);
        // searchObj.quantity = Number(varObj.length);
        const searchVarObj = varObj.find((element: any, idx: number) => idx == index);
        searchVarObj.quantity = Number(calledWith);
        // console.log(TAG + " finding new items ", (searchVarObj));
        tempObj[searchRs] = searchObj;
        setViewCart(tempObj);
      };
    };
  };

  return (
    <Modal open={viewCartOpen} onOk={handleCancel} onCancel={handleCancel} footer={[]}>
      <div className='d-flex justify-content-center'>
        <div className='col-12 mt-5 p-0'>
          <div className='row border-bottom'>
            <div className='col-3 fw-bold'>Product</div>
            <div className='col-3 fw-bold'>Varient</div>
            <div className='col-3 fw-bold'>Quantity</div>
            <div className='col-3 fw-bold'>price</div>
          </div>

          {cartItems.length > 0 && cartItems.map((item: any, index: number) => (

            (item.varients).map((element: any, idx: number) => {
              return (
                <div key={idx} id={item.id} className='row my-2'>
                  <div className='col-3'>{item.item}</div>
                  <div className='col-3'>{element.variant}</div>

                  <div className='col-3'>
                    <Quantity quantity={element.quantity} setQuantity={(quantity: any) => quantityOp(quantity, item.id, idx)} />
                  </div>
                  <div className='col-3'>{element.price * element.quantity}</div>
                </div>
              )

            })

          )
          )}

          <div className='br-6 p-2 my-2 mx-4 bg-red text-center'>
            <Link
              href="/viewCart"
            >
              Proceed to Order
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ViewCartList;
