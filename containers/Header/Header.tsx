import React, { useState } from 'react';

import { ICFaFilter, ICFaSearch } from '@/utils/icons';

const TAG = "Header: ";
const Navigation = () => {

  const [active, setActive] = useState<any>('nav1');

  console.log(active);
  

  return (
    <div className=''>
      <div className='text-center m-0 bg-red pt-2'>
        <span className='fs-30 fw-bold tc-w'>Table Thread</span>
        <p className='fs-6 m-0 py-2 tc-l-dark'>Powered by TechCo</p>
      </div>
      <div className='d-flex justify-content-between text-center m-0 bg-red pt-2'>

        <div className='d-flex col-8 bg-red'>
          {/* <div className="col-6 p-2 bg-w br-t-l-30 br-t-r-30">nav1</div> */}
          <div className={`col-6  ${active == 'nav1' ? "" : 'bg-red'}`}>
            <div
              className={`p-3 ${active == 'nav2' ? " " : 'bg-w br-t-l-30 br-t-r-30'}`}
              onClick={() => setActive("nav1")}
            >
              nav1
            </div>
          </div>
          <div className={`col-6 ${active == 'nav2' ? '' : 'bg-w'}`}>
            <div
              className={`p-3 ${active == 'nav2' ? "" : 'bg-red br-b-l-30'}`}
              onClick={() => setActive("nav2")}
            >
              nav2
            </div>
          </div>
        </div>

        <div className='d-flex col-4'>
          <div className={`col-5 bg-w opacity-5`}>
            <div className={`p-2 bg-red br-b-r-30`}>
              <div className={`bg-w br-50 py-2 bg-w`}>
                <ICFaSearch />
              </div>
            </div>
          </div>
          <div className="col-7 p-2 bg-w opacity-5 br-t-l-30"><ICFaFilter /></div>
        </div>

      </div>

    </div>
  );
};

export default Navigation;
