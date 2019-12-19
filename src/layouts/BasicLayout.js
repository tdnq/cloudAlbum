import React from "react";
import { Layout, Menu } from 'antd';
import { Icon } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/logo.ico";
import isShowSign from "../utils/isShowSign.js";
import styles from "./index.module.scss";
const { Header, Content, Footer } = Layout;
export default class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSign: isShowSign() ? "boxShow" : "boxHidden"
        }
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={logo}></img>
                        </Link>
                        <span>简易云相册</span>
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['4']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link to="/album">
                                <Icon type="fund" theme="twoTone" />
                                相册
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="question-circle" theme="twoTone" />
                            帮助</Menu.Item>
                        <Menu.Item key="3" className={this.state.isShowSign} style={{ marginLeft: "auto" }}>
                            <Link to="/login">
                                <Icon type="login" />
                                登录
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" className={this.state.isShowSign} style={{ marginLeft: "auto" }}>
                            <Link to="/logup">
                                <Icon type="stock" />
                                注册
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ padding: "24px 0", minHeight: " 100vh", maxWidth: 1298, margin: "auto" }}>{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>简易云相册&copy;TD</Footer>
            </Layout>
        )
    }

}