import React, { Component } from 'react';
import { Menu, Dropdown, Modal } from 'antd';
import { Route, Link } from 'react-router-dom';
import companyLogo from '../img/company-logo-dh.png';
import Way from '../bottomMethod/Way';


const $ = new Way();

const menu = (
    <Menu>
        <Menu.Item key="1"><Link to="/ecommerce/MyBill">我的提单</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/ecommerce/Apply">申请退货</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/ecommerce/Return">进入物流</Link></Menu.Item>
    </Menu>
);

const LoginPage = () => (
    <>
        <li className="layui-nav-item login-re">
            <Link to="/ecommerce">首页</Link>
        </li>
        <li className="layui-nav-item login-re">
            <Link to="/ecommerce/AppDown">APP下载</Link>
        </li>
        <li className="layui-nav-item login-re">
            <Link to="/ecommerce/MyCenter">我的中心</Link>
        </li>
    </>
)
const SamePage = () => (
    <li className="layui-nav-item right-line buy">
        <Link to="/ecommerce/MyCenter"><i className="img-jlt my-ct"></i>我的中心</Link></li>
)
const OtherPage = () => (
    <li className="layui-nav-item right-line home">
        <Link to="/ecommerce/"><i className="img-jlt homepage"></i>销售首页</Link>
    </li>
)
const Logining = () => (
    <>
        <li className="layui-nav-item right-line buy bus">
            <Dropdown overlay={menu}>
                <Link to="/ecommerce/MyBill" style={{ userSelect: 'none' }}><i className="img-jlt business"></i>业务跟踪</Link>
            </Dropdown>
        </li>
        <li className="layui-nav-item car">
            <Link to="/Cart"> <i className="img-jlt shopcar-ye shop-num"
                data-shopnum=""></i>我的购物车</Link>
        </li>
    </>
)

class TopMsg extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
        this.handleLoginOut = this.handleLoginOut.bind(this)
    }


    handleLoginOut(e) {
        e.preventDefault();
        this.setState({ visible: !this.state.visible })
    }
    handleLoginOutSure() {
        $.request({
            url: '/ecommerce/user/logout',
            token: 1,
            yesFn: function (data) {
                sessionStorage.clear();
                window.location.href = '/ecommerce';
            }
        })
    }
    handleLoginOutCancel() {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return (
            <>
                <span>您好，{sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : '某某某'}</span><Link to="javascript:void(0)" onClick={this.handleLoginOut} className="red">[退出]</Link>
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.handleLoginOutSure.bind(this)}
                    onCancel={this.handleLoginOutCancel.bind(this)}
                >
                    <p>是否确认退出？</p>
                </Modal>
            </>
        )
    }

}


class Head extends Component {
    render() {
        return (
            <header id="header">
                <div className="header">
                    <div className="banxin layui-row">
                        <div className="left-logo layui-col-xs2">
                            <Link to="/ecommerce"><img src={companyLogo} alt="东海电商" title="东海电商" /></Link>
                        </div>
                        <div className="al-login layui-col-xs4">
                            <Route path="/ecommerce/:topicId" component={TopMsg} />
                        </div>
                        <div className="right-nav layui-col-xs6 fr">
                            <ul className="layui-nav layui-bg-custom nav_dir">
                                <Route path="/Login" exact component={LoginPage} />
                                <Route path="/ecommerce" exact component={SamePage} />
                                <Route path="/ecommerce/:topicId" component={OtherPage} />
                                <Route path="/ecommerce" component={Logining} />
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Head;
