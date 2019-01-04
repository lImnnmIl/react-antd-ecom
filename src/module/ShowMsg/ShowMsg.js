import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import '../../sass/ShowMsg.scss';

class ShowMsg extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <Row className="allAbility-body-contract">
                <h2>{title}</h2>
                {children}
            </Row>
        );
    }
}

export default ShowMsg;