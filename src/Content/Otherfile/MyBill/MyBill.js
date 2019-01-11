import React, { Component } from 'react';
import PageTitle from '../../../module/Page/PageTitle/PageTitle.js';
import { Tabs, Input, Form, Icon, Row, Col, Button, Select } from 'antd';
import MyBillData from './MyBillData';
import '../../../sass/GoodsImg.scss';
import '../../../sass/buyer/myBill.scss';


const TabPane = Tabs.TabPane;
const Search = Input.Search;
const Option = Select.Option;

/**
 * tabs烂右侧输入框
 * @param {*} props 
 */
const operations = (props) => (<Search
    placeholder={props.searchCon}
    style={{ display: 'inline-block', marginTop: '5px', marginRight: '40px' }}
    onSearch={value => (
        props.searchFn ? props.searchFn(value) : null
    )}
    addonAfter={(<div onClick={props.moreFn ? props.moreFn : null}>
        <span style={{ display: 'inline-block', marginRight: '5px' }}>高级</span>
        <Icon type="down" />
    </div>)}
/>)

// 更多搜索区域划分
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};


// 更多搜索
class MoreSearch extends Component {


    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                if (this.props.onSubmit) {
                    this.props.onSubmit(values)
                }
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row gutter={24}>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Col span={8}>
                        <Form.Item
                            {...formItemLayout}
                            label="合同编号"
                        >
                            {getFieldDecorator('orderNo', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input placeholder="请输入合同编号" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            {...formItemLayout}
                            label="提单状态"
                        >
                            {getFieldDecorator('status', {
                            })(
                                <Select
                                    placeholder="请选择一个提单状态"
                                    showSearch
                                >
                                    <Option value="10">未提</Option>
                                    <Option value="15">撤销待审核</Option>
                                    <Option value="20">已发送到物流</Option>
                                    <Option value="30">已配车</Option>
                                    <Option value="35">司机已取卡</Option>
                                    <Option value="40">车辆进厂</Option>
                                    <Option value="45">已装货</Option>
                                    <Option value="50">已提</Option>
                                    <Option value="60">退货</Option>
                                    <Option value="70">已废弃</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            {...formItemLayout}
                            label="商品名称"
                        >
                            {getFieldDecorator('goodsName', {
                            })(
                                <Input placeholder="请输入商品名称" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            {...formItemLayout}
                            label="规格型号"
                        >
                            {getFieldDecorator('specificationsName', {
                            })(
                                <Input placeholder="请输入规格型号" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            {...formItemLayout}
                            label="车牌号"
                        >
                            {getFieldDecorator('carNum', {
                            })(
                                <Input placeholder="请输入车牌号" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={6} offset={18} style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                    </Col>
                </Form>

            </Row >
        )
    }
}

const MoreSearchForm = Form.create({ name: 'register' })(MoreSearch);




class MyBill extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                field: {
                    pageSize: 10,
                    token: '9555270ee6011da371d63f93064c6f5a',
                    tokenCheck: 1,
                }
            },
            isMore: false
        }
    }

    SubmitMoreSearch(searchs) {
        if (this.state.billNo) {
            searchs.billNo = this.state.billNo
        }
        const { data } = this.state;
        data.field = {...searchs,...data.field} 
        this.setState({ data })
    }

    searchFn(value) {
        // console.log(value)
        const { data } = this.state;
        data.field.billNo = value
        this.setState({ data })
    }
    moreFn() {
        this.setState({ isMore: !this.state.isMore })
    }
    render() {

        return (
            <div>
                <PageTitle title={'我的提单'}>
                    <button className="layui-btn layui-btn-primary layui-border-skyblue layui-btn-sm fr layui-btn-radius addBill">添加提单</button>
                </PageTitle>
                <div className="account-content">
                    <Tabs style={{ padding: '0 20px' }} tabBarExtraContent={operations({ searchCon: '商品名称/合同号/合同状态', searchFn: this.searchFn.bind(this), moreFn: this.moreFn.bind(this) })}>
                        <TabPane tab={`全部提单`} key="1">
                            <div className="moreSearch" style={{ display: this.state.isMore ? 'block' : 'none', padding: '10px' }}>
                                <MoreSearchForm onSubmit={this.SubmitMoreSearch.bind(this)} />
                            </div>
                            <div className="contract-Msg-title">
                                <div className="conract-goodMsg">商品信息</div>
                                <div className="conract-otherMsg">
                                    <div className="conract-otherMsg-child">合同类型</div>
                                    <div className="conract-otherMsg-child">单价</div>
                                    <div className="conract-otherMsg-child">提单数量/重量</div>
                                    <div className="conract-otherMsg-child">实提数量/重量</div>
                                    <div className="conract-otherMsg-child">其他信息</div>
                                    <div className="conract-otherMsg-child">操作</div>
                                </div>
                            </div>
                            <div className="contract-Msg-content" id="contract-Msg-content">
                                <MyBillData
                                    address="/ecommerce/buyer/rest/bill/gets"
                                    parameter={this.state.data.field}
                                />
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default MyBill;