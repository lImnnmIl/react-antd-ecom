import React, { Component } from 'react';
import PageTitle from '../Page/PageTitle/PageTitle.js';
import '../../sass/GoodsImg.scss';

class MyBill extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'我的提单'}>
                    <button class="layui-btn layui-btn-primary layui-border-skyblue layui-btn-sm fr layui-btn-radius addBill">添加提单</button>
                </PageTitle>
            </div>
        );
    }
}

export default MyBill;