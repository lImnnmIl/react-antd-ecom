import React, { Component } from 'react';
import { Tabs, Input , Form, } from 'antd';
import '../../../sass/PageContent.scss';

const TabPane = Tabs.TabPane;
const Search = Input.Search;
const operations = (props) => (<Search
                        placeholder={props.searchCon}
                        onSearch={props.searchFn?props.searchFn():null}
                        addonAfter={(<div onClick={this.HandleClick.bind(this)}>
                                        <span style={{ display:'inline-block',marginRight:'5px' }}>高级</span>
                                        <Icon type="down" /> />
                                    </div>)}
                                />)

class PageContent extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div class="account-content">
                <Tabs tabBarExtraContent={operations}>
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
        );
    }
}

export default PageContent;