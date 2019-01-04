import React, { Component } from 'react'
import wrapWithLoadData from '../../bottomMethod/wrapWithAxiosData'
import GoodsImg from '../../module/GoodsImg/GoodsImg';
import Line from '../../img/line.png';
import { Spin, Alert } from 'antd';

class Hot extends Component {
    
    render() {
        const { data } = this.props;
        return (
            data ? data.map((v, k) => (<div key={k} className="layui-col-xs3"><GoodsImg key={k} data={v} src={Line} hot={1}/></div>)) : ''
        );
    }
}

Hot = wrapWithLoadData(Hot);
export default Hot;