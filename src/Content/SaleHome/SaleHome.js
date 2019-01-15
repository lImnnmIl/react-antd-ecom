import React, { Component } from 'react';
import '../../sass/retailer/saleHomepage.scss';
import { Carousel,Tabs  } from 'antd';
import Content from '../Content';
import CostomMsg from './CostomMsg';
import Hot from './Hot';
import Recommend from './Recommend';
import CountDown from './CountDown';
import GoodsList from './GoodsList';
import Way from '../../bottomMethod/Way';


const TabPane = Tabs.TabPane;
const $ =new Way();

class SaleHome extends Component {

    constructor() {
        super()
        this.state = { data: {futuresNum:'--',actualsNum:'--'},
                        Time: ['--','--','--','--'],
                        isStart : 0
                    } 
    }

    componentDidMount() {
        const that = this;
        // console.log(this)
        $.request({url:'/ecommerce/resource/count', yesFn: function(data){
            that.setState({ data : data })
        }})
    }
    render(){
        return(
            <Content>
                <div>
                    <CostomMsg />
                    <div className="recmd">
                        <h4>为您推荐</h4>
                        <div>
                            <Recommend 
                                address="/ecommerce/resource/recommend"
                                parameter={{}}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="subject layui-row">
                        <CountDown />
                        <div className="layui-col-xs10">
                            <Carousel dots='false'>     
                                <div className="layui-row hot-list">
                                    <Hot 
                                        address="/ecommerce/resource/hot"
                                        parameter={{pageSize:4}}
                                    />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="commodity-options">
                        <Tabs>
                            <TabPane tab={<span>期货资源<span>（{this.state.data.futuresNum}条）</span></span>} key="1">
                                <div className="goods-msg">
                                    <GoodsList
                                        address="/ecommerce/resource/gets"
                                        parameter={{"type":2,"classificationId":"","warehouseId":"","regionId":"","pageSize":10,"orderBy":"fgsi.materialName asc","materialName":""}}
                                    />
                                </div>
                            </TabPane>
                            <TabPane tab={<span>现货资源<span>（{this.state.data.actualsNum}条）</span></span>} key="2">
                                <div className="goods-msg">
                                    <GoodsList
                                        address="/ecommerce/resource/gets"
                                        parameter={{"type":1,"classificationId":"","warehouseId":"","regionId":"","pageSize":10,"orderBy":"m.name asc","materialName":""}}
                                        type={1}
                                    />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </Content>
        )
    }
}



export default SaleHome;