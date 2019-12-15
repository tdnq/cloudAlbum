import React from "react";
import request from "../../../utils/request.js";
import servicesApi from "../../../services/api.js";
import axios from "axios";
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import styles from "./index.module.scss";
axios.defaults.withCredentials=true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // axios.post(servicesApi.userLoginApi,values).then(function(res){
            //     console.log(res);
            // })
            request(servicesApi.userLoginApi,"POST",values).then(data=>{
                if(data.status===200){
                    message.success('登录成功');
                    setTimeout(() => {
                        window.location.pathname="/album"
                    }, 200);
                }else{
                    message.error('登录失败，请确认账户密码正确');
                }
            });
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.loginFormLayout}>
                <div className={styles.loginForm}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="#">
                                忘记密码
          </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
          </Button>
                            Or <a href="/logup">去注册!</a>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;