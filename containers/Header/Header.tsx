// Import necessary modules
import React, { useState } from 'react';

const TAG = "Header: ";
const Navigation = () => {

  const [active, setActive] = useState<any>('0');

  return (
    <ul className="nav">
      <li className="bg-danger nav-item" onClick={() => setActive('food')}>
        <a className={`nav-link ${active == 'food' ? 'active' : 'inactive'}`} href="#">
          food
        </a>
      </li>
      <li className="bg-danger nav-item" onClick={() => setActive('beaweares')}>
        <a className={`nav-link ${active == 'beaweares' ? 'active' : 'inactive'}`} href="#">
        beaweares
        </a>
      </li>
      <li className="bg-danger nav-item">
        <a className="nav-link" href="#">
          search
        </a>
      </li>
      <li className="bg-danger nav-item">
        <a className="nav-link">
          filter
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
