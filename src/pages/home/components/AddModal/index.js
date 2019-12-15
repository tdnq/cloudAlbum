import React from 'react';
import { Modal, message, Input, Icon } from 'antd';

import styles from "./index.module.scss";
const info = (text) => {
  message.error(text);
};
export default class AddModal extends React.Component {
  state = {
    visible: false,
    newAddName: ""
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  inputOnchange = (e) => {
    this.setState({
      newAddName: e.target.value
    })
  };
  isAdd = () => {
    return Boolean(this.state.newAddName);
  };
  handleOk = e => {
    this.setState({
      visible: false,
    });
    if (this.isAdd()) {
      console.log(this.state);
    } else {
      info("相册名不能为空")
    }
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>

            <div className={styles.addBlock} onClick={this.showModal}>
              <div className={styles.iconWrapper}>
                <Icon type="plus" style={{ fontSize: "4em" }} />
                <p>
                  增加相册
                  </p>
              </div>
            </div>
            <Modal
              title="请输入新的相册名"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="确认"
              cancelText="取消"
            >
              <Input size="large" placeholder="相册名" onChange={this.inputOnchange} />
            </Modal>
      </div>
    );
  }
}
