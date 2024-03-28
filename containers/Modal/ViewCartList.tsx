import React, { useState, useEffect, Fragment } from 'react';
import { Modal } from 'antd';
import Link from 'next/link';

import Quantity from '@/component/quantity/Quantity';

const TAG = "ViewCartList: ";
const ViewCartList = (props: any) => {

  const { viewCartOpen, setViewCartOpen, viewCart, setViewCart } = props;

  const [cartItems, setCartItem] = useState<any[]>([]);

  useEffect(() => {
    setCartItem(viewCart);
  }, [viewCart]);


  const handleCancel = () => {
    setViewCartOpen(false);
  }


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


  // console.log(TAG + ' cart item ', viewCart);

  return (
    <Modal
      open={viewCartOpen}
      onOk={handleCancel}
      onCancel={handleCancel}
      footer={[]}
    >
      <div className=''>

        <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Varient</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>

              {cartItems.length !== 0 ?
                (
                  cartItems.map((item: any, index: number) => {
                    return (
                      <Fragment key={index}>
                        {item.varients.map((varItem: any, indexSec: number) => {
                          console.log("i got the item in cart list", varItem);
                          return (
                            <tr key={indexSec} >
                              <td>{item?.item}</td>
                              <td>{varItem?.variant}</td>
                              <td>
                                <Quantity
                                  quantity={varItem.quantity}
                                  setQuantity={(quantity: any) => quantityOp(quantity, item.id, indexSec)}
                                />
                              </td>
                              <td>{varItem?.price * varItem.quantity}</td>
                            </tr>
                          )
                        })}

                      </Fragment>
                    );
                  })
                )
                :
                ""
              }
            </tbody>
          </table>
        </div>

        <button className='btn btn-primary'>
          <Link href="/viewCart" className='text-light'>Proceed to Order </Link>
        </button>

      </div>
    </Modal >
  )
}

export default ViewCartList;
