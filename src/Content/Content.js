import React, { Component } from 'react';

class Content extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const {children} = this.props;
        return (    
            <main id="main">
                <div className="main">
                    <div className="banxin layui-row">
                        <div className="layui-col-xs2 left">
                            {children[0]}
                        </div>
                        <div className="layui-col-xs10 right">
                            {children[1]}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default Content;
