
import React, { Component } from 'react';
import '../../sass/SingleLineImg.scss';

class SingleLineImg extends Component {
    render() {
        const { data, children } = this.props;
        return (
            <div className="conract-goodMsg-td">
                <div className="img layui-input-inline">
                    <img src={v.image || api.ip + '/resource/images/line.png'} alt={data.goodsname} title={data.goodsname} />
                    <p className="img-jlt sub layui-row">
                        <span className="layui-col-xs7 over red" title={data.specificationsName}>{data.specificationsName}</span>
                        <span className="layui-col-xs4 layui-col-xs-offset1 over write" title={data.materialName}>{data.materialName}</span>
                    </p>
                </div>
                <div className="goods-msg layui-input-inline">
                    {children}
                </div>
            </div>
        );
    }
}

export default SingleLineImg;