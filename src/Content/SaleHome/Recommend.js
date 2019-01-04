import React, { Component } from 'react'
import wrapWithLoadData from '../../bottomMethod/wrapWithAxiosData'
import GoodsImg from '../../module/GoodsImg/GoodsImg';
import Line from '../../img/line.png';



class Recommend extends Component {
    constructor() {
        super()
        this.state = { data: [{materialName:'--',specificationsName:'--/--'}] }
    }
    render() {
        const { data } = this.props.data && this.props.data != null ? this.props : this.state;
        return (
            data ? data.map((v, k) => (
                <GoodsImg key={k} data={v} src={Line}>
                    <p className="smallFs">材质：{v.materialName}</p>
                    <p className="smallFs">{v.specificationsName.split('/')[0]}</p>
                    <p className="smallFs">{v.specificationsName.split('/')[1]}</p>
                </GoodsImg>)) : ''
        );
    }
}

Recommend = wrapWithLoadData(Recommend);
export default Recommend;