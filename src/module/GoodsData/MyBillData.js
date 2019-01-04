import React, { Component } from 'react';
import GoodsData from './GoodsData';
import wrapWithLoadData from '../../bottomMethod/wrapWithAxiosDataPage';
import '../../sass/MyBillData.scss';


class MyBillData extends Component {
    constructor() {
        super()
        this.state = { data: { "billId": 409, "billNo": "BL181114100004", "customerUserId": null, "customerUserName": null, "status": 50, "statusName": null, "commitDate": "2018-11-14 15:28:28", "inFactoryDate": null, "outFactoryDate": "2018-11-14 15:44:51.0", "takeType": null, "destination": null, "carNum": null, "endPlateProvince": null, "endPlateCity": null, "treturnRequestId": null, "approvalData": null, "record": null, "remark": null, "returnRequestData": null, "returnStatus": null, "details": [{ "id": 422, "isFuturesOrder": null, "torderDetailId": null, "tfuturesOrderDetailId": 105, "orderType": "期货合同", "orderNo": "FT181029100003", "orderCommitDate": null, "billNo": null, "status": null, "statusName": null, "name": "带钢", "warehouseId": null, "warehouseName": "成品1库", "specificationsName": "330*2.2", "goodsCode": "DGQ1-Q195-330*2.2", "classificationName": null, "materialName": "Q195", "toWeight": 2.5, "buyWeight": null, "buyNumber": null, "canTakeWeight": null, "canTakeNumber": null, "takeWeight": 22.5, "takeNumber": 9, "actualTakeWeight": 22.5, "actualTakeNumber": 9, "weightUnit": "吨", "basePrice": 3500.0, "diffPrice": 30.0, "freight": 0.0, "price": 3530.0, "quantityUnit": "件", "settlementPath": null, "amountOfMoney": null }, { "id": 423, "isFuturesOrder": null, "torderDetailId": null, "tfuturesOrderDetailId": 111, "orderType": "期货合同", "orderNo": "FT181029100005", "orderCommitDate": null, "billNo": null, "status": null, "statusName": null, "name": "带钢", "warehouseId": null, "warehouseName": "成品1库", "specificationsName": "330*2.2", "goodsCode": "DGQ1-Q195-330*2.2", "classificationName": null, "materialName": "Q195", "toWeight": 2.5, "buyWeight": null, "buyNumber": null, "canTakeWeight": null, "canTakeNumber": null, "takeWeight": 2.5, "takeNumber": 1, "actualTakeWeight": 2.5, "actualTakeNumber": 1, "weightUnit": "吨", "basePrice": 3500.0, "diffPrice": 30.0, "freight": 0.0, "price": 3530.0, "quantityUnit": "件", "settlementPath": null, "amountOfMoney": null }] } }
    }
    componentWillMount() {
        // GoodsData = wrapWithLoadData(GoodsData, '/ecommerce/bill/gets', { "billNo": "", "orderNo": "", "goodsName": "", "status": "", "specificationsName": "", "startDate": "", "endDate": "", "carNum": "", "key": "", "pageSize": 10, "token": "34de01326e639ada4df97f481f61e6b6", "tokenCheck": 1 })
    }

    render() {
        const { data } = this.props.data && this.props.data != null ? this.props : this.state;
        const { details } = data;
        return (
            <GoodsData >
                <div>
                    <p className="fl">提单编号：<span>{data.billNo}</span></p>
                    <p className="fl">提单时间：<span>{data.commitDate}</span></p>
                </div>
                <table>
                    <tbody>
                        {details.map((item, k) => (
                            <tr key={k}>
                                <td className="conract-goodMsg-td">
                                    <div className="img layui-input-inline">
                                        <img src={item.image || '/ecommerce/resource/images/line.png'} alt={item.name} title={item.name} />
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
                                <td className="conract-otherMsg-td">
                                    <p className="blue" title={item.orderType}>{item.orderType}</p>
                                    <p className="contractNum-sm gray" title={item.orderNo}>({item.orderNo})</p>
                                </td>
                                <td className="conract-otherMsg-td">
                                    <p className="" title={"￥" + item.price}>￥{item.price}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GoodsData>
        );
    }
}

MyBillData = wrapWithLoadData(MyBillData);
export default MyBillData;