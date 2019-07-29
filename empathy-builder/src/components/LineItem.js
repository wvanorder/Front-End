import React, { useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

import 'antd/dist/antd.css';

const Item = styled.div`
    width: 90%;
    height: 75px;
    background-color: #66ccda;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: 5px 5px;
    border-radius: 4px;
    &:hover{
        background-color: #9ddee7;
        transition-duration: 0.2s;
    }
`


const LineItem = props => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleOk = e => {
        console.log(e);
        setModalVisible(false);
      };

    const handleCancel = e => {
        console.log(e);
        setModalVisible(false);
      };
    
    return(
        <Item onClick={() => setModalVisible(!modalVisible)}>
            <h2>{props.category.name}</h2>
            <h2>$$$$</h2>
            <Modal
          title={props.category.name}
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </Item>
    )
};

export default LineItem;