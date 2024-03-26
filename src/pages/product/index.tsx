import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FloatButton, Input } from 'antd';

import ProductItems from '@/containers/ProductItems/ProductItems';
import FilterMenu from '@/containers/Modal/FilterMenu';

import PaginationComponent from '@/component/pagination/pagination';

import { ICGiNotebook, ICFaFilter } from '@/utils/icons';
import ViewCartList from '@/containers/Modal/ViewCartList';

const TAG = "Product Page: ";
const Product = () => {

  const [defaultCurrent, setDefaultCurrent] = useState<number>(1);
  const [defaultPageSize, setDefaultPageSize] = useState<number>(10);

  const [filterOpen, setfilterOpen] = useState<boolean>(false);
  const [viewCartOpen, setViewCartOpen] = useState<boolean>(false);
  const [viewCart, setViewCart] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);

  const callPaginationAction = (page: number, limit: number) => {
    setDefaultCurrent(page);
    setDefaultPageSize(limit);
  };

  const dummyData = [
    {
      "id": "uuid1",
      "productName": "Veg tikki",
      "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
      "productType": "Veg",
      "category": "Fast food",
      "amount": 96,
      "image": "/assets/images/productImages/aaluTikki.jpeg",
      "productVarient": [
        {
          "varient": "Small tikki",
          "Price": "35"
        },
        {
          "varient": "Medium tikki",
          "Price": "45"
        },
        {
          "varient": "Larze tikki",
          "Price": "60"
        }
      ]
    },
    {
      "id": "uuid2",
      "productName": "Cold cofee",
      "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
      "productType": "Veg",
      "category": "Drink",
      "amount": 40,
      "image": "/assets/images/productImages/aaluTikki.jpeg",
      "productVarient": [
        {
          "varient": "Cold coffe",
          "Price": "40"
        }
      ]
    },
    {
      "id": "uuid3",
      "productName": "Momos",
      "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
      "productType": "Veg",
      "category": "Lunch",
      "amount": 70,
      "image": "/assets/images/productImages/aaluTikki.jpeg",
      "productVarient": [
        {
          "varient": "Momos",
          "Price": "60"
        }
      ]
    },
    {
      "id": "uuid4",
      "productName": "Roll",
      "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
      "productType": "Non-veg",
      "category": "Breakfast",
      "amount": 85,
      "image": "/assets/images/productImages/aaluTikki.jpeg",
      "productVarient": [
        {
          "varient": "Egg roll",
          "Price": "85"
        }
      ]
    },
    {
      "id": "uuid5",
      "productName": "Biryani",
      "productDiscription": " biryani is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
      "productType": "Non-veg",
      "category": "Dinner",
      "amount": 85,
      "image": "/assets/images/productImages/aaluTikki.jpeg",
      "productVarient": [
        {
          "varient": "250 g",
          "Price": "85"
        },
        {
          "varient": "500 g",
          "Price": "145"
        },
        {
          "varient": "1 kg",
          "Price": "185"
        }
      ]
    },
    {
      "id": "uuid6",
      "productName": "Dosa",
      "productDiscription": " Biryani is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
      "productType": "Veg",
      "category": "Dinner",
      "amount": 100,
      "image": "/assets/images/productImages/aaluTikki.jpeg",
      "productVarient": [
        {
          "varient": "Plain",
          "Price": "100"
        },
        {
          "varient": "Masala",
          "Price": "135"
        },
        {
          "varient": "Spacial",
          "Price": "185"
        }
      ]
    },
  ];

  useEffect(() => {
    setProduct(dummyData);
  }, [])

  // console.log(TAG, "VIEW CART: ", viewCart);



  useEffect(() => {
    console.log(TAG + " product viewcart ", viewCart);
    localStorage.setItem("cartData", JSON.stringify(viewCart));
  }, [viewCart]);

  return (
    <div>
      <div className='text-center m-0 bg-light-red pt-2'>
        <span className='fs-30 fw-bold tc-w'>Table Thread</span>
        <p className='fs-6 m-0 py-2 tc-l-dark'>Powered by TechCo</p>
      </div>
      <div className='d-flex my-1'>
        <div className='col-lg-10 col-md-10 col-8 '>
          <Input placeholder="Basic usage" />
        </div>
        <div className='col-lg-2 col-md-2 col-4 text-center bg-red' onClick={() => setfilterOpen(true)}>
          <span>Filter </span> <ICFaFilter />
        </div>
      </div>
      <div className='px-1 col-12'>
        <div className='bdr-w-1 br-6 br-solid brc-gray my-4 mx-1 px-3 box-shadow'>
          <div className='d-flex justify-content-between align items-center mb-4'>
            <div className='fw-bold fs-24 my-2'>Products</div>
          </div >

          <div className='row border-top gy-4 py-3'>

            {product.map((item: any, index: number) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={index}>
                  <ProductItems
                    item={item}
                    idx={item.id}
                    viewCart={viewCart}
                    setViewCart={setViewCart}
                    product={product}
                  />
                </div>
              )
            })}

            <PaginationComponent
              total={product.length}
              defaultCurrent={defaultCurrent}
              defaultPageSize={defaultPageSize}
              onChange={callPaginationAction}
              onShowSizeChange={callPaginationAction}
            />
            <div className='col-2 hemant'>
              {/* <FloatButton
                onClick={() => setfilterOpen(true)}
                // icon={}
                description='filter'
                type='default'
                // className='bg-red'
              /> */}
              filter
            </div>
            {viewCart.length !== 0 ?
              <div
                className='d-flex justify-content-center'
                onClick={() => setViewCartOpen(true)}>
                <div
                  className={`col-4 br-6 p-2 bg-red p-fixed p-b-50 text-center `}
                >
                  Item List's <ICGiNotebook /> {viewCart.length}
                </div>
              </div>
              :
              <div></div>
            }
          </div>
        </ div>
      </div >

      <FilterMenu
        filterOpen={filterOpen}
        setfilterOpen={setfilterOpen}
        setProduct={setProduct}
        dummyData={dummyData}
        viewCart={viewCart}
        setViewCart={setViewCart}
      />

      <ViewCartList
        viewCartOpen={viewCartOpen}
        setViewCartOpen={setViewCartOpen}
        viewCart={viewCart}
        setViewCart={setViewCart}
      />

    </div>
  );
}

export default Product;
