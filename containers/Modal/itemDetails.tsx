import React from 'react';
import { Modal } from 'antd';

const ItemDetails = (props: any) => {

  const {itemDetails, handleCancel} = props;

  return (
    <Modal
      open={itemDetails}
      onOk={handleCancel}
      onCancel={handleCancel}
      footer={[]}
    >

    </Modal >
  )
}

export default ItemDetails;
