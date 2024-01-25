import React, { useState } from 'react';
import { Card } from 'antd';

import PaginationComponent from '@/component/pagination/pagination';

import { aaluTikki, chickenMomos, logo2 } from '@/utils/image';
import Navhead from '@/containers/Header/Header';

const TAG = "Product Page :";

const Product = () => {

  const [defaultCurrent, setDefaultCurrent] = useState<number>(1);
  const [defaultPageSize, setDefaultPageSize] = useState<number>(10);

  const [product, setProduct] = useState([
    {
      productName: 'Chiken Tikka',
      productType: 'Non-veg',
      category: 'Starter',
      amount: '80 Rs',
      image: aaluTikki
    },
    {
      productName: 'Chiken Tikka',
      productType: 'Non-veg',
      category: 'Starter',
      amount: '80 Rs',
      image: aaluTikki
    },
    {
      productName: 'Momos',
      productType: 'veg',
      category: 'Fast-food',
      amount: '60 Rs',
      image: chickenMomos
    },
    {
      productName: 'Chicken Momos',
      productType: 'Non-veg',
      category: 'Fast-food',
      amount: '85 Rs',
      image: chickenMomos
    },
    {
      productName: 'Chiken role',
      productType: 'Non-veg',
      category: 'Fast-food',
      amount: '120 Rs',
      image: chickenMomos
    },
    {
      productName: 'Panner Tikka',
      productType: 'veg',
      category: 'Starter',
      amount: '70 Rs',
      image: aaluTikki
    },
    {
      productName: 'Chiken Tikka',
      productType: 'Non-veg',
      category: 'Starter',
      amount: '80 Rs',
      image: aaluTikki
    },
    {
      productName: 'Chiken role',
      productType: 'Non-veg',
      category: 'Fast-food',
      amount: '120 Rs',
      image: chickenMomos
    },
    {
      productName: 'Panner Tikka',
      productType: 'veg',
      category: 'Starter',
      amount: '70 Rs',
      image: aaluTikki
    },
    {
      productName: 'Chiken Tikka',
      productType: 'Non-veg',
      category: 'Starter',
      amount: '80 Rs',
      image: aaluTikki
    },
    {
      productName: 'Chiken Tikka',
      productType: 'Non-veg',
      category: 'Starter',
      amount: '80 Rs',
      image: aaluTikki
    },
    {
      productName: 'Momos',
      productType: 'veg',
      category: 'Fast-food',
      amount: '60 Rs',
      image: chickenMomos
    },
  ]);

  const callPaginationAction = (page: number, limit: number) => {
    setDefaultCurrent(page);
    setDefaultPageSize(limit);
  };

  return (
    <>
      <div>
        <div className='text-center m-0 bg-danger pt-2'>
          <span className='fs-3 fw-bold text-light'>Table Thread</span>
          <p className='fs-6 m-0 py-2 text-secondary'>Powered by TechCo</p>
        </div>
        <Navhead />
        <div className='col-12'>
          <Card className='my-4 box-shadow'>
            <div className='d-flex justify-content-between align items-center mb-4'>
              <div className='fw-bold fs-4 ' >Products</div>
            </div >

            <div className='row border-top gy-4 py-3'>

              {product.map((item, index) => {
                return (
                  <div className='col-lg-3 col-md-4 col-sm-12'>
                    <Card className='py-3' hoverable bodyStyle={{ padding: 0 }}>
                      <img style={{ height: 200, width: '100%', objectFit: 'cover' }} alt="example" src={item.image} />
                      <div className='px-3'>
                        <h5 className='m-0 mt-2'>{item.productName}</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic modi non facere earum.</p>
                        <div className='d-flex justify-content-between'>
                          <div>
                            <p className='m-0'><span className='fw-bold'>Categery: </span> {item.category}</p>
                            <p className='m-0'><span className='fw-bold'>Type: </span> {item.productType}</p>
                            <p className='m-0'><span className='fw-bold'>Amount: </span> {item.amount}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}

              <PaginationComponent
                total={product.length}
                defaultCurrent={defaultCurrent}
                defaultPageSize={defaultPageSize}
                onChange={callPaginationAction}
                onShowSizeChange={callPaginationAction}
              />;
            </div>
          </Card >
        </div >

      </div >
    </>
  )
}

export default Product;
