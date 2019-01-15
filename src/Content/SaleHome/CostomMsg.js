import React, { Component } from 'react';
import Portrait from '../../img/portrait.png';
import { Route, Link } from "react-router-dom";
import { Modal } from 'antd';
import Way from '../../bottomMethod/Way';


const $ = new Way();



class CostomMsg extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
        this.handleLoginOut = this.handleLoginOut.bind(this)
    }


    handleLoginOut() {
        this.setState({ visible: !this.state.visible })
    }
    handleLoginOutSure() {
        $.request({ 
            url: '/ecommerce/user/logout',
            token:1,
            yesFn:function(data){
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
            <div className="user">
                <div className="user-change">
                    <div className="loging layui-row">
                        <div className="layui-col-xs3">
                            <img src={Portrait} alt="个人头像" title="个人头像" />
                        </div>
                        <div className="layui-col-xs9 term">
                            {sessionStorage.getItem('userName') ? (<p>{sessionStorage.getItem('userName') + '！' + ' ' + '您好！'}<br /><span onClick={this.handleLoginOut} className="blue point">[退出]</span></p>) : (<><p>HI！你好！</p><p>欢迎来到销售平台！</p></>)}
                            <Modal
                                title="提示"
                                visible={this.state.visible}
                                onOk={this.handleLoginOutSure.bind(this)}
                                onCancel={this.handleLoginOutCancel.bind(this)}
                            >
                                <p>是否确认退出？</p>
                            </Modal>
                        </div>
                    </div>
                    <div className="btn">
                        {sessionStorage.getItem('token') ? '' : (<><Link to="Login"><button type="button" className="layui-btn layui-btn-skyblue layui-btn-sm">登录</button></Link><Link to="Register"> <button type="button" className="layui-btn layui-btn-skyblue layui-btn-sm">注册</button></Link></>)}
                    </div>
                    <div className="notice">
                        <div className="title">
                            <span>系统公告</span>
                            <Link to="/NotList"><i className="layui-icon layui-icon-next"></i></Link>
                        </div>
                        <ul className="content notice-list">

                        </ul>
                    </div>
                </div>
                <div className="fun layui-row">
                    <div className="layui-col-xs4">
                        <Link to="/ecommerce/MyBill">
                            <span className="img-jlt goods-stock"></span>
                            <p>现货合同</p>
                        </Link>
                    </div>
                    <div className="layui-col-xs4">
                        <Link to='/ecommerce/MyBill'>
                            <span className="img-jlt bill-lading"></span>
                            <p>我的提单</p>
                        </Link>
                    </div>
                    <div className="layui-col-xs4">
                        <Link to='/ecommerce/MyBill'>
                            <span className="img-jlt today-resc"></span>
                            <p>今日资源</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CostomMsg;