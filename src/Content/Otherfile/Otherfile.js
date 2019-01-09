import React, { Component } from 'react';
import Content from '../Content';
import SideNav from '../../module/SideNav';
import MyBill from './MyBill/MyBill';
import { Route } from "react-router-dom";
import Way from '../../bottomMethod/Way';

const $ = new Way();
const Page = {
            'MyBill':MyBill
            }

const Otherfile = ({match})=> {

    let {topicId} = match.params;
    return (
        <Content>
            <div>
                <SideNav />
            </div>
            <div>
                <Route path="/ecommerce/:topicId" component={Page[topicId]} />
            </div>
        </Content>
    )
    }




export default Otherfile;