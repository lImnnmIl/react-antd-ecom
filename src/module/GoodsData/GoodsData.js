import React, { Component } from 'react';
import wrapWithLoadData from '../../bottomMethod/wrapWithAxiosData';
import '../../sass/GoodsData.scss';

class GoodsData extends Component {
    constructor() {
        super()
        this.state = { data: null }
    }
    render() {
        const { children } = this.props;
        return (
            <div className="conract-Lis-detali">
                <div className="conract-Lis-detali-top clearfix">
                    {children[0]}
                </div>
                <div className="conract-Lis-detali-bottom">
                    {children[1]}
                </div>
            </div>
        );
    }
}


export default GoodsData;