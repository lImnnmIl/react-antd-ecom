import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Col, Row, message } from 'antd';
import '../../../sass/other/login.scss';
import BgImg from '../../../images/login.png';
import Way from '../../../bottomMethod/Way';


const $ = new Way();



class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
            time: new Date().getTime()
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { parname } = this.props
        const that = this
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.loginIp = '1'
                values.verifyKey = this.state.time
                delete values.remember
                // console.log('Received values of form: ', values);
                $.request({
                    url: $.login,
                    data: values,
                    yesFn: function (data) {
                        if (data.code == 1 || data.code == 3) {
                            delete data.code
                            delete data.message
                            $.setSession(data)
                            window.location.href = parname.pathname;
                        } else {
                            message.error(data.message);
                            that.setState({ time: new Date().getTime() })
                        }
                    }
                })
            }
        });
    }
    handleClick() {
        this.setState({ time: new Date().getTime() })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="title">钢材在线销售平台登录</div>
                <Form.Item>
                    {getFieldDecorator('loginAccount', {
                        rules: [{ required: true, message: '请输入您的账号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('verifyCode', {
                        rules: [{ required: true, message: '请输入验证码' }],
                    })(
                        <Row>
                            <Col span={12}>
                                <Input placeholder="验证码" />
                            </Col>
                            <Col span={11} offset={1}>
                                <img onClick={this.handleClick.bind(this)} src={$.imgUrl + this.state.time} />
                            </Col>
                        </Row>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    或 <a href="">注册!</a>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginForm);



class Login extends Component {

    render() {
        let { from } = this.props.location.state ? this.props.location.state : { from: { pathname: "/ecommerce" } };
        console.log(from)
        return (
            <div className="main" style={{ backgroundImage: 'url(' + BgImg + ')' }}>
                <div className="banxin">
                    <div className="login">
                        <div id="components-form-demo-normal-login">
                            <WrappedNormalLoginForm parname={from} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;