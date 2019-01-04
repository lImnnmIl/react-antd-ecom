import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd';
import '../sass/main.scss';


class Layout extends Component {
    render() {
        return (
            <main id="main">
                <div className="main">
                    <div className="banxin">
                        <Row>
                            <Col span={4}>
                                {this.props.children[0]}
                            </Col>
                            <Col span={19} offset={1}>
                                {this.props.children[1]}
                            </Col>
                        </Row>
                    </div>
                </div>
            </main>
        );
    }
}




export default Layout;
