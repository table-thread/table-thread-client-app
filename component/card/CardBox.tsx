import React from 'react';

const CardBox = (props:any) => {

  const {children, className} = props;

  return (
    <div className={`card-Wrapper border rounded ${className}`}>
      {children}
    </div>
  )
}

export default CardBox;
