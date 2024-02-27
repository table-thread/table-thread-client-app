import React, { useState } from 'react';
import { FloatButton } from 'antd';

import ProductItems from '@/containers/ProductItems/ProductItems';

import PaginationComponent from '@/component/pagination/pagination';
import CardBox from '@/component/card/CardBox';

import { aaluTikki, chickenMomos } from '@/utils/image';
import FilterMenu from '@/containers/Modal/FilterMenu';

const TAG = "Product Page: ";
const Product = () => {

  const [defaultCurrent, setDefaultCurrent] = useState<number>(1);
  const [defaultPageSize, setDefaultPageSize] = useState<number>(10);
  const [filterOpen, setfilterOpen] = useState<boolean>(false);

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

            {product.map((item, index) => {
              return (
                <div className='col-lg-3 col-md-4 col-sm-12' key={index}>
                  <ProductItems item={item} />
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
          </div>
        </ div>
      </div >
      <FilterMenu filterOpen={filterOpen} setfilterOpen={setfilterOpen}></FilterMenu>
    </div>
  );
}

export default Product;
