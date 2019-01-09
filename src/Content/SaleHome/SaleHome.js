import React, { Component } from 'react';
import '../../sass/retailer/saleHomepage.scss';
import { Carousel,Tabs  } from 'antd';
import Content from '../Content';
import CostomMsg from './CostomMsg';
import Hot from './Hot';
import Recommend from './Recommend';
import GoodsList from './GoodsList';
import Time from '../../img/time.png';
import TimeStart from '../../img/timeStart.png';
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

    componentWillMount() {
        const that = this;
        $.request({url:'/ecommerce/buyer/rest/resource/count', yesFn: function(data){
            that.setState({ data : data })
        }})
        $.request({url:'/ecommerce/buyer/rest/personal/open', yesFn: function(data){
            const nowTime = new Date();
            let Time;
            if (nowTime < new Date(data.amStartTime)) {
                Time = data.amStartTime;
                that.setState({ isStart : 0});
            } else if (data.amEndTime == data.pmStartTime) {
                Time = data.pmEndTime;
                that.setState({ isStart : 1});
            } else if (nowTime > new Date(data.amStartTime) && nowTime < new Date(data.amEndTime)) {
                Time = data.amEndTime;
                that.setState({ isStart : 1});
            } else if (nowTime > new Date(data.amEndTime) && nowTime < new Date(data.pmStartTime)) {
                Time = data.pmStartTime;
                that.setState({ isStart : 0});
            } else if (nowTime > new Date(data.pmStartTime) && nowTime < new Date(data.pmEndTime)) {
                Time = data.pmEndTime;
                that.setState({ isStart : 1});
            } else {
                Time = data.amStartTime;
                that.setState({ isStart : 0});
            }
            $.countdown(new Date(Time.replace(/-/g, '/').replace(/T|Z/g, ' ').trim()).getTime(),function(data){
                // console.log(data);
                data.map((v,k)=>{
                    data[k] = v> 9 ? data[k] : `0${data[k]}`
                })
                that.setState({ Time : data })
            })
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
                                address="/ecommerce/buyer/rest/resource/recommend"
                                parameter={{}}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="subject layui-row">
                        <div className="layui-col-xs2 count">
                            <img src={this.state.isStart?Time:TimeStart} alt="" />
                            <div className="count-down layui-row">
                                <span className="layui-col-xs4">{this.state.Time[1]}</span>
                                <span className="layui-col-xs4">{this.state.Time[2]}</span>
                                <span className="layui-col-xs4">{this.state.Time[3]}</span>
                            </div>
                        </div>
                        <div className="layui-col-xs10">
                            <Carousel dots='false'>     
                                <div className="layui-row hot-list">
                                    <Hot 
                                        address="/ecommerce/buyer/rest/resource/hot"
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
                                        address="/ecommerce/buyer/rest/resource/gets"
                                        parameter={{"type":2,"classificationId":"","warehouseId":"","regionId":"","pageSize":10,"orderBy":"fgsi.materialName asc","materialName":""}}
                                    />
                                </div>
                            </TabPane>
                            <TabPane tab={<span>现货资源<span>（{this.state.data.actualsNum}条）</span></span>} key="2">
                                <div className="goods-msg">
                                    <GoodsList
                                        address="/ecommerce/buyer/rest/resource/gets"
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