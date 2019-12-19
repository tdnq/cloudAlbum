import React from "react";
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

export default class AdminLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style={{height:50}}>
              <p style={{color:"white",lineHeight:"48px",fontWeight:600,fontSize:"1em",textAlign:"center"}}>
                后台管理系统
                </p>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="picture" />
              <span>照片审核</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: "100vh",
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}