import React, { Component } from 'react';
import Way from '../../bottomMethod/Way';
import '../../sass/GoodsImg.scss';


const way =new Way;


class GoodsImg extends Component {
    constructor() {
        super()
        this.state = { data: [{materialName:'--',specificationsName:'--/--'}] }
    }
    render() {
        const { data,children,src,hot } = this.props;
        return (
            <div className="recmd-detail">
                <div className="img">
                    <a href={'?role=futusettlements&ids=' + data.goodsId}><img src={data.image || src} alt={data.goodsname} title={data.goodsname} /></a>
                    <p className={hot?"img-jlt hot":"img-jlt commend"}></p>
                </div>
                <div className="recmd-detail-msg">
                    <div className="material">
                        {children}
                    </div>
                    <div className="price layui-row">
                        <span className="layui-col-xs7">￥{way.transNum(data.salePrice)}</span>
                        <span className="layui-col-xs5">￥{way.transNum(data.quotePrice)}</span>
                    </div>
                    <div className="clearfix">
                        <a href={'?role=futusettlements&ids=' + data.goodsId} className="click-shop">点击购买</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoodsImg;