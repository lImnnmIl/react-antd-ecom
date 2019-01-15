import React, { Component } from 'react';
import GoodsData from '../../../module/GoodsData/GoodsData';
import wrapWithLoadData from '../../../bottomMethod/wrapWithAxiosDataPage';
import '../../../sass/MyBillData.scss';
import Line from '../../../img/line.png';


class Dome extends Component {
    render() {
        return (
            this.props.children
        )
    }
}



class MyBillData extends Component {
    constructor() {
        super()
        this.state = {}
        this.setRow = this.setRow.bind(this)
    }


    setRow(data) {
        var opera = data.details.length;
        var op = opera;
        var rows = 1;
        if (data.status == "50") {
            opera = 1;
            op = data.details.length * 3;
            rows = 3;
        }
        // console.log(op);
        var num = { opera: opera, op: op, rows: rows };
        return num;
    }


    render() {
        const { data, children } = this.props;
        return (<div>
            {data.data ? data.data.map((v, r) => (
                <GoodsData key={r}>
                    <div>
                        <p className="fl">提单编号：<span>{v.billNo}</span></p>
                        <p className="fl">提单时间：<span>{v.commitDate}</span></p>
                    </div>
                    <table>
                        <tbody>
                            {v.details.map((item, k) => (
                                <React.Fragment  key={k}>
                                    <tr>
                                        <td rowSpan={this.setRow(v).rows} className="conract-goodMsg-td">
                                            <div className="img layui-input-inline">
                                                <img src={item.image || Line} alt={item.name} title={item.name} />
                                                <p className="img-jlt sub layui-row"> <span className="layui-col-xs7 over red" title={item.specificationsName}>{item.specificationsName}</span>
                                                    <span className="layui-col-xs5 over write" title={item.materialName}>{item.materialName}</span>
                                                </p>
                                            </div>
                                            <div className="goods-msg layui-input-inline">
                                                <p className="layui-row"><span className="layui-col-xs4">品名：</span><span className="layui-col-xs8 over"
                                                    title={item.name}>{item.name}</span></p>
                                                <p className="layui-row"><span className="layui-col-xs4">材质：</span><span className="layui-col-xs8 over"
                                                    title={item.materialName}>{item.materialName}</span></p>
                                                <p className="layui-row"><span className="layui-col-xs4">规格：</span><span className="layui-col-xs8 over"
                                                    title={item.specificationsName}>{item.specificationsName}</span></p>
                                            </div>
                                        </td>
                                        <td rowSpan={this.setRow(v).rows} className="conract-otherMsg-td">
                                            <p className="blue" title={item.orderType}>{item.orderType}</p>
                                            <p className="contractNum-sm gray" title={item.orderNo}>({item.orderNo})</p>
                                        </td>
                                        <td rowSpan={this.setRow(v).rows} className="conract-otherMsg-td">
                                            <p className="" title={"￥" + item.price}>￥{item.price}</p>
                                        </td>
                                        <td rowSpan={this.setRow(v).rows} className="conract-otherMsg-td">
                                            <p title={item.takeNumber + item.quantityUnit + '/' + item.takeWeight + item.weightUnit}>{item.takeNumber}{item.quantityUnit}/{item.takeWeight}{item.weightUnit}</p>
                                        </td>
                                        <td rowSpan={this.setRow(v).rows} className="conract-otherMsg-td">
                                            <p title={item.actualTakeNumber + item.quantityUnit + '/' + item.actualTakeWeight + item.weightUnit}>{item.actualTakeNumber == null ? 0 : item.actualTakeNumber}{item.quantityUnit}/{item.actualTakeWeight == null ? 0 : item.actualTakeWeight}{item.weightUnit}</p>
                                        </td>
                                        {k == '0' || v.status == '50' ? <td className="conract-otherMsg-td" rowSpan={this.setRow(v).opera}>{v.status > 59 ? (<p title="/">/</p>) : v.status > 49 ? (<p title="自提">运输方式：自提</p>) : v.status > 19 ? (<div><p title="自提">运输方式：自提</p><p title={(v.endPlateProvince == null ? "" : v.endPlateProvince) + (v.endPlateCity == null ? "" : v.endPlateCity)} >目的地：{v.endPlateProvince == null ? "" : v.endPlateProvince}{v.endPlateCity == null ? "" : v.endPlateCity}</p></div>) : v.status > 9 ? (<p title="/">/</p>) : null}</td> : null}
                                        {k == '0' ? <td rowSpan={this.setRow(v).op} className="conract-otherMsg-td">{v.status == 10 ? (<div><a href="javascript:void(0)" className="blue send-logistics">发送物流</a><br /><a href="javascript:void(0)" className="blue delete-bill">撤销提单</a></div>) : v.status > 9 && v.status < 35 ? (v.status > 20 ? <a href="javascript:void(0)" className="yellow look-car">查看配车</a> : null) : v.status > 20 && v.status < 70 ? <a href="javascript:void(0)" className="yellow look-car">查看配车</a> : null}</td> : null}
                                    </tr>
                                    {
                                        v.status == '50' ? (
                                            <tr>
                                                <td className="conract-otherMsg-td">
                                                    <p title={(v.endPlateProvince == null ? "" : v.endPlateProvince) + (v.endPlateCity == null ? "" : v.endPlateCity)}>目的地：{v.endPlateProvince == null ? "" : v.endPlateProvince}{v.endPlateCity == null ? "" : v.endPlateCity}</p>
                                                </td>
                                            </tr>) : null
                                    }

                                    {
                                        v.status == '50' ? (
                                            <tr>
                                                <td className="conract-otherMsg-td">
                                                    <a href="javascript:void(0)" className="yellow look-detail">查看详情</a>
                                                </td>
                                            </tr>) : null
                                    }
                                </React.Fragment>
                            ))}

                        </tbody>
                    </table>
                </GoodsData>)) : null}
            <div id="bid_Page" className="bid-page">
                {children}
            </div>
        </div>)
    }
}

MyBillData = wrapWithLoadData(MyBillData);
export default MyBillData;