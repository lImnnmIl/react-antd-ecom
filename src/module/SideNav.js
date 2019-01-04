import React, { Component } from 'react'
import wrapWithLoadData from '../bottomMethod/wrapWithAxiosData'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Menu, Icon } from 'antd';
import '../sass/main.scss';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const rous = [
    { parentName: '', key: 'sub1', children: [{ url: 'allAbility', name: '全部功能' }] },
    { parentName: '资金管理', key: 'sub2', children: [{ url: 'myAccount', name: '账户货款' }] },
    { parentName: '订单管理', key: 'sub3', children: [{ url: 'myOrder', name: '意向订单' }] },
    { parentName: '合同管理', key: 'sub4', children: [{ url: 'spotContract', name: '现货合同' }, { url: 'futuContract', name: '期货合同' }] },
    { parentName: '资源管理', key: 'sub5', children: [{ url: 'todayOfabl', name: '今日可提资源' }] },
    { parentName: '提单管理', key: 'sub6', children: [{ url: 'myBill', name: '我的提单' }, { url: 'applyReturnGoods', name: '申请退货' }] },
    { parentName: '结算报表', key: 'sub7', children: [{ url: 'accountsDetail', name: '后结算明细' }, { url: 'futuContract', name: '后结算汇总' }] },
    { parentName: '账户管理', key: 'sub8', children: [{ url: 'changePassword', name: '修改密码' }, { url: 'changeData', name: '修改基本信息' }] },
]


const Sub = ({ rou }) => (
    rou.parentName ?
        (<SubMenu>
            {rou.children.map((child, i) => <Menu.Item key={child.url}><Link to={child.url}>{child.name}</Link></Menu.Item>)}
        </SubMenu>) :
        (<div>
            {rou.children.map((child, i) => <Menu.Item key={child.url}><Link to={child.url}>{child.name}</Link></Menu.Item>)}
        </div>)
);

const Nav = ({ match }) => (
    <main id="main">
        <div className="main">
            <div className="banxin">
                <Row>
                    <Col span={4}>
                        <Menu
                            style={{ width: "100%" }}
                            defaultSelectedKeys={[match.params.topicId]} 
                            selectedKeys={[match.params.topicId]}
                            defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8']}
                            mode="inline"
                        >
                            {rous.map((rou, i) => (
                                rou.parentName ?
                                    (<SubMenu key={rou.key} title={<span><Icon type="mail" /><span>{rou.parentName}</span></span>}>
                                        {rou.children.map((child, a) => <Menu.Item key={child.url}><Link to={child.url}>{child.name}</Link></Menu.Item>)}
                                    </SubMenu>)
                                    :
                                    (rou.children.map((child, i) => <Menu.Item key={child.url}><Link to={child.url}>{child.name}</Link></Menu.Item>))
                            ))}
                        </Menu>
                    </Col>
                    <Col span={19} offset={1}>
                        <div>
                            <Route path="/ecommerce/buyer/home" component={Home} />
                            <Route path="/ecommerce/buyer/netflix" component={Netflix} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </main>

);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Netflix = () => (
    <div>
        <h2>About</h2>
    </div>
);
const SideNav = () => (
    <Router>
        <div>
            <Route
                path="/ecommerce/buyer/:topicId"
                component={Nav} />
        </div>
    </Router>
);
// class SideNav extends Component {
//     render() {
//         return (
//             <Router>
//                 <Route
//                     path="/ecommerce/buyer/:topicId"
//                     component={Nav} />
//             </Router>
//         );
//     }
// }
// class SideNav extends Component {
//     render() {
//         return (
//             <main id="main">
//                 <div className="main">
//                     <div className="banxin">
//                         <Row>
//                             <Col span={4}>
//                                 <Router>
//                                     <Menu
//                                         onClick={this.handleClick}
//                                         style={{ width: "100%" }}
//                                         defaultSelectedKeys={['1']}
//                                         defaultOpenKeys={['sub1', 'sub2', 'sub4']}
//                                         mode="inline"
//                                     >
//                                         <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
//                                             <Menu.Item key="1"><Link to="/netflix">Netflix</Link></Menu.Item>
//                                             <Menu.Item key="2"><Link to="/home">home</Link></Menu.Item>
//                                         </SubMenu>
//                                         <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
//                                             <Menu.Item key="5">Option 5</Menu.Item>
//                                             <Menu.Item key="6">Option 6</Menu.Item>
//                                         </SubMenu>
//                                         <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
//                                             <Menu.Item key="9">Option 9</Menu.Item>
//                                             <Menu.Item key="10">Option 10</Menu.Item>
//                                             <Menu.Item key="11">Option 11</Menu.Item>
//                                             <Menu.Item key="12">Option 12</Menu.Item>
//                                         </SubMenu>
//                                     </Menu>
//                                 </Router>
//                             </Col>
//                             <Col span={19} offset={1}></Col>
//                         </Row>
//                     </div>
//                 </div>
//             </main>


//         );
//     }
// }
// SideNav = wrapWithLoadData(SideNav, '/ecommerce/resource/count', {})
export default SideNav;
