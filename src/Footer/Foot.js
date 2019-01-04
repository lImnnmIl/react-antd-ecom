import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Foot extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer">
                    <div className="footer-head">
                        <div className="banxin">
                            <ul className="layui-row">
                                <li className="layui-col-xs3"><i className="img-jlt advanced"></i>行业领先的钢铁技术</li>
                                <li className="layui-col-xs3"><i className="img-jlt high-quality"></i>优质可靠的资源保证</li>
                                <li className="layui-col-xs3"><i className="img-jlt security"></i>全方位的安全保证</li>
                                <li className="layui-col-xs3"><i className="img-jlt resources"></i>绿灯绿印一手资源</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-body">
                        <div className="banxin">
                            <ul>
                                <li className="fl">
                                    <dl>
                                        <dt>
                                            平台规则
                                </dt>
                                        <dd>
                                            <a href="/purchase/help/index?page=agrmt">用户注册协议</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/help/index?page=buyrule">买家交易规则</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className="fl">
                                    <dl>
                                        <dt>
                                            合同模板
                                </dt>
                                        <dd>
                                            <a href="/purchase/error/404">钢材产品销售合同</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">钢材产品采购合同</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">钢材产品保证金合同</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className="fl">
                                    <dl>
                                        <dt>
                                            平台服务
                                </dt>
                                        <dd>
                                            <a href="/purchase/help/index?page=tel">服务热线</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">发票说明</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">下载专区</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className="fl">
                                    <dl>
                                        <dt>
                                            支付方式
                                </dt>
                                        <dd>
                                            <a href="/purchase/error/404">在线支付</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">余额支付</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">在线融资</a>
                                        </dd>
                                        <dd>
                                            <a href="/purchase/error/404">银行承兑汇票</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className="fl">
                                    <dl>
                                        <dt>
                                            客服电话
                                </dt>
                                        <dd>
                                            400-685-5656
                                </dd>
                                        <dd>
                                            <span>客服时间24小时</span>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-foot">
                        <div className="footer-foot-h">
                            <Breadcrumb separator="|">
                                <Breadcrumb.Item>关于立恒</Breadcrumb.Item>
                                <Breadcrumb.Item>聚鑫物云</Breadcrumb.Item>
                                <Breadcrumb.Item>56用车</Breadcrumb.Item>
                                <Breadcrumb.Item>智慧库存</Breadcrumb.Item>
                                <Breadcrumb.Item>友情链接</Breadcrumb.Item>
                                <Breadcrumb.Item>合作企业</Breadcrumb.Item>
                                <Breadcrumb.Item>联系客服</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <p> <span>山西立恒管控采购系统</span> | <span>晋ICP备16006263号</span> | <span>晋公安备1410210200114号</span> </p>
                        <p>山西聚鑫物云电子科技有限公司 版权所有</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Foot;
