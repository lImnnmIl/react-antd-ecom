import React, { Component } from 'react'
import { Pagination } from 'antd';
const axios = require('axios');

export default (WrappedComponent, successFn) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = { data: {data:null} }
        }
        componentWillMount() {
            console.log(this.props);
            const { address, parameter } = this.props;
            const that = this;
            axios.post(address, parameter).then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    const { data } = response;
                    console.log(data);
                    that.setState({ data })
                    if (successFn) {
                        successFn(data);
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        onChange(page, pageSize) {
            console.log(this.props);
            const { address, parameter } = this.props;
            parameter.pageSize = pageSize;
            parameter.pageNum = page;
            const that = this;
            axios.post(address, parameter).then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    const { data } = response;
                    console.log(data);
                    that.setState({ data })
                    if (successFn) {
                        successFn(data);
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        onShowSizeChange(current, pageSize) {
            console.log(current, pageSize);
            const { address, parameter } = this.props;
            parameter.pageSize = pageSize;
            parameter.pageNum = current;
            const that = this;
            axios.post(address, parameter).then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    const { data } = response;
                    console.log(data);
                    that.setState({ data })
                    if (successFn) {
                        successFn(data);
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        render() {
            return (
                <div>
                    {this.state.data.data && this.state.data.data != 'null' ? (
                        <WrappedComponent parent={this.props} data={this.state.data} >
                            <Pagination
                                showQuickJumper
                                defaultCurrent={1}
                                defaultPageSize={10}
                                total={this.state.data.total}
                                onChange={this.onChange.bind(this)}
                                onShowSizeChange={this.onShowSizeChange.bind(this)}
                            />
                        </WrappedComponent>
                        ) : ''}

                </div>
            )
        }
    }
    return NewComponent
}