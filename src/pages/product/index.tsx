import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FloatButton } from 'antd';

import ProductItems from '@/containers/ProductItems/ProductItems';
import FilterMenu from '@/containers/Modal/FilterMenu';

import PaginationComponent from '@/component/pagination/pagination';

import { ICGiNotebook } from '@/utils/icons';

const TAG = "Product Page: ";
const Product = () => {

  const [defaultCurrent, setDefaultCurrent] = useState<number>(1);
  const [defaultPageSize, setDefaultPageSize] = useState<number>(10);
  const [filterOpen, setfilterOpen] = useState<boolean>(false);
  const [viewCart, setViewCart] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);

  const callPaginationAction = (page: number, limit: number) => {
    setDefaultCurrent(page);
    setDefaultPageSize(limit);
  };

  // const dummyData = [
  //   {
  //     "productName": "veg tikki",
  //     "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
  //     "productType": "veg",
  //     "category": "fast food",
  //     "amount": 96,
  //     "image": "/assets/images/productImages/aaluTikki.jpeg",
  //     "productVarient": [
  //       {
  //         "varient": "small tikki",
  //         "Price": "35"
  //       },
  //       {
  //         "varient": "medium tikki",
  //         "Price": "45"
  //       },
  //       {
  //         "varient": "larze tikki",
  //         "Price": "60"
  //       }
  //     ]
  //   },
  //   {
  //     "productName": "tikki",
  //     "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
  //     "productType": "veg",
  //     "category": "dirnk",
  //     "amount": 96,
  //     "image": "/assets/images/productImages/aaluTikki.jpeg",
  //     "productVarient": [
  //       {
  //         "varient": "aalu tikki",
  //         "Price": "40"
  //       }
  //     ]
  //   },
  //   {
  //     "productName": "momos",
  //     "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
  //     "productType": "veg",
  //     "category": "lunch",
  //     "amount": 70,
  //     "image": "/assets/images/productImages/aaluTikki.jpeg",
  //     "productVarient": [
  //       {
  //         "varient": "momos",
  //         "Price": "60"
  //       }
  //     ]
  //   },
  //   {
  //     "productName": "roll",
  //     "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
  //     "productType": "veg",
  //     "category": "breakfast",
  //     "amount": 85,
  //     "image": "/assets/images/productImages/aaluTikki.jpeg",
  //     "productVarient": [
  //       {
  //         "varient": "egg roll",
  //         "Price": "85"
  //       }
  //     ]
  //   },
  //   {
  //     "productName": "biryani",
  //     "productDiscription": " biryani is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
  //     "productType": "veg",
  //     "category": "dinner",
  //     "amount": 96,
  //     "image": "/assets/images/productImages/aaluTikki.jpeg",
  //     "productVarient": [
  //       {
  //         "varient": "250 g",
  //         "Price": "85"
  //       },
  //       {
  //         "varient": "500 g",
  //         "Price": "145"
  //       },
  //       {
  //         "varient": "1 kg",
  //         "Price": "185"
  //       }
  //     ]
  //   },
  // ]
  
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("productData");
    
    const dummyData = [
      {
        "productName": "veg tikki",
        "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
        "productType": "veg",
        "category": "fast food",
        "amount": 96,
        "image": "/assets/images/productImages/aaluTikki.jpeg",
        "productVarient": [
          {
            "varient": "small tikki",
            "Price": "35"
          },
          {
            "varient": "medium tikki",
            "Price": "45"
          },
          {
            "varient": "larze tikki",
            "Price": "60"
          }
        ]
      },
      {
        "productName": "tikki",
        "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
        "productType": "veg",
        "category": "dirnk",
        "amount": 96,
        "image": "/assets/images/productImages/aaluTikki.jpeg",
        "productVarient": [
          {
            "varient": "aalu tikki",
            "Price": "40"
          }
        ]
      },
      {
        "productName": "momos",
        "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
        "productType": "veg",
        "category": "lunch",
        "amount": 70,
        "image": "/assets/images/productImages/aaluTikki.jpeg",
        "productVarient": [
          {
            "varient": "momos",
            "Price": "60"
          }
        ]
      },
      {
        "productName": "roll",
        "productDiscription": " Tikki is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
        "productType": "veg",
        "category": "breakfast",
        "amount": 85,
        "image": "/assets/images/productImages/aaluTikki.jpeg",
        "productVarient": [
          {
            "varient": "egg roll",
            "Price": "85"
          }
        ]
      },
      {
        "productName": "biryani",
        "productDiscription": " biryani is a very popular snack indigenous to the Indian subcontinent. In Hindi, Aloo means “potato” and tikki means “patties or cutlet”.",
        "productType": "veg",
        "category": "dinner",
        "amount": 96,
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
    ]

    if (dataFromLocalStorage !== null) {
      const parseData = JSON.parse(dataFromLocalStorage);
      setProduct(dummyData);
    }

    // const cartdata = localStorage.getItem("cartData");
    // if (cartdata !== null) {
    //   const parseData = JSON.parse(cartdata)
    //   // setViewCart(parseData);
    // }

  }, [])

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(viewCart));
    // console.log(viewCart);
  }, [viewCart]);

  console.log(TAG + " product list ", product);

  return (
    <div>
      <div className='text-center m-0 bg-red pt-2'>
        <span className='fs-30 fw-bold tc-w'>Table Thread</span>
        <p className='fs-6 m-0 py-2 tc-l-dark'>Powered by TechCo</p>
      </div>
      <div className='px-5 col-12'>
        <div className='bdr-w-1 br-6 br-solid brc-gray my-4 mx-1 px-3 box-shadow'>
          <div className='d-flex justify-content-between align items-center mb-4'>
            <div className='fw-bold fs-24 my-2'>Products</div>
          </div >

          <div className='row border-top gy-4 py-3'>

            {product.map((item: any, index: number) => {
              return (
                <div className='col-lg-3 col-md-4 col-sm-12' key={index}>
                  <ProductItems
                    item={item}
                    idx={`uuid${index}`}
                    viewCart={viewCart}
                    setViewCart={setViewCart}
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
            <div className='col-2'>
              <FloatButton
                onClick={() => setfilterOpen(true)}
                // description='filter'
                type='primary'
              />
            </div>
            <div className='d-flex justify-content-center'>
              <Link
                className={`col-4 br-6 p-2 bg-red p-fixed p-b-50 text-center ${viewCart.length !== 0 ? '' : 'd-none'}`}
                href='/viewCart'
              >
                View Cart <ICGiNotebook />
              </Link>
            </div>
          </div>
        </ div>
      </div >
      <FilterMenu
        filterOpen={filterOpen}
        setfilterOpen={setfilterOpen}
        product={product}
        setProduct={setProduct}
        dummyData={'dummyData'}
      >

      </FilterMenu>
    </div>
  );
}

export default Product;
