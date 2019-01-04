import React, { Component } from 'react'
import wrapWithAxiosDataPage from '../../bottomMethod/wrapWithAxiosDataPage'
import Line from '../../img/line.png';


class GoodsList extends Component {
    
    render() {
        const { data,children } = this.props;
        const { type } = this.props.parent;
        return (
            <div className="msg-body">
                <table id="tab-goods">
                    <thead>
                        <tr>
                            <th>商品</th>
                            <th>分类/品名</th>
                            {type == '1'? <th>规格/型号</th> : <th>规格</th>}
                            {type == '1'? <th>厂家</th> : <th>厂家/地区</th>}
                            {type == '1'? <th>地区</th> : <th>仓库</th>}
                            {type == '1'? <th>重量</th> : <th>重量/数量</th>}
                            <th>单价</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
            {data.data ? data.data.map((v, k) => (
                <tr key={k}>
                    <td className="spot-long">
                        <div className="img">
                            <img src={v.image || Line} alt={ v.goodsName } title={ v.goodsName } />
                            <h6 className="saleName layui-row" title={ v.classificationName||'--' + '/' + v.goodsName||'--' }>{ v.classificationName||'--' }/{ v.goodsName||'--' }</h6>
                        </div>
                    </td>
                    <td className="spot-shot">
                        <p className="layui-row" title={ v.classificationName ||'--' }>{ v.classificationName ||"--" }</p>
                        <p className="layui-row" title={ v.goodsName||'--' }>{ v.goodsName|| "--" }</p>
                    </td>
                    {type == '1'? (<td className="spot-midd">
                    <p className="layui-row"><span className="layui-col-xs5">材质：</span><span className="layui-col-xs7 over" title={ v.materialName||'--' }>{ v.materialName||'--' }</span></p>
                    <p className="layui-row"><span className="layui-col-xs5">规格：</span><span className="layui-col-xs7 over" title={ v.specificationsName||'--' }>{ v.specificationsName||'--' }</span></p></td>)
                    :
                    (<td className="spot-midd">
                        <p className="layui-row futu-p" title={ v.materialName||'--' }>材质:{ v.materialName||'--' }</p>
                        <p className="layui-row futu-p" title={ v.specificationsName.split('/')[0]||'--' }>{ v.specificationsName.split("/")[0]||'--' }</p>
                        <p className="layui-row futu-p" title={ v.specificationsName.split('/')[1]||'--' }>{ v.specificationsName.split("/")[1]||'--'  }</p>
                    </td>)}
                    {type == '1'?(<td className="spot-shot">
                        <p className="layui-row" title={ v.factory ||'--' }>{ v.factory ||'--' }</p>
                        <p className="layui-row" title={ v.regionName||'--' }>{ v.regionName||'--' }</p>
                    </td>):
                    (<td className="spot-shot">
                        <p title={ v.factory }>{ v.factory }</p>
                    </td>)}
                    {type == '1'?(<td className="spot-shot">
                        <p title={ v.warehouseName } className="blue">{ v.warehouseName }</p>
                    </td>):
                    (<td className="spot-shot">
                        <p title={ v.regionName }>{ v.regionName }</p>
                    </td>)}
                    {type == '1'?(<td className="spot-midd">
                        <p title={ v.weight + '吨/' + v.number + '件'}>{ v.weight + '吨/' + v.number + '件'}</p>
                    </td>):
                    (<td className="spot-midd">
                        <p title={ v.weight + '吨'}>{ v.weight + '吨'}</p>
                    </td>)}
                    
                    <td className="spot-midd">
                        <p className="layui-row"><span className="layui-col-xs4">售价：</span><span className="layui-col-xs8 now-price over red" title={ '￥' + v.salePrice }>{ '￥' + v.salePrice }</span></p>
                        <p className="layui-row"><span className="layui-col-xs4">报价：</span><span className="layui-col-xs8 over his-price"
                                title={ '￥' + v.quotePrice }>{ '￥' + v.quotePrice }</span></p>
                    </td>
                    <td className="spot-long tab-good"><span  data-id={v.goodsId}  data-detail='{{JSON.stringify(v)}}' data-material={ v.materialName||''} className="img-jlt shopcar-re-r point add-futugoods"></span><a href={`?role=futusettlements&ids=${v.goodsId}`} className="layui-btn layui-btn-yellow layui-btn-sm">立即购买</a> </td>
                </tr>
            )) : ''}
            </tbody>
        </table>
        <div id="bid_Page" className="bid-page">
                {children}
        </div>
    </div>
        );
    }
}

GoodsList = wrapWithAxiosDataPage(GoodsList);
export default GoodsList;