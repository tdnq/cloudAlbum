import React from "react";
import servicesApi from "../../../services/api.js";
import request from "../../../utils/request.js";
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Checkbox,
    Button,
    Modal,
    message
} from 'antd';
import styles from "./index.module.scss";
const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: '注册成功，是否去登录？',
    okText: '登录体验',
    cancelText: '暂时不用',
    icon:<Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>,
    onOk() {
      window.location.pathname="/login";
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            request(servicesApi.userLogupApi,"POST",values).then(data=>{
                if(data.status===200){
                    showConfirm()
                }
            });
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('密码输入不一致!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className={styles.logupFormLayout}>
                <div className={styles.logupForm}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item
                            label={
                                <span>
                                    昵称&nbsp;
                <Tooltip title="What do you want others to call you?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: '请输入邮箱!',
                                    },
                                    {
                                        required: true,
                                        message: '请输入邮箱!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="确认密码" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请检查密码!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>
                                    已阅读 <a href="#">服务条款</a>
                                </Checkbox>,
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                注册
            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const logup = Form.create({ name: 'register' })(RegistrationForm);
export default logup;