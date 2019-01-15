import React, { Component } from 'react'
import { Pagination } from 'antd';
import Way from './Way';


const $ = new Way();
// const axios = require('axios');

export default (WrappedComponent, successFn) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = { data: { data: null }, prevProps: null }
        }
        componentDidMount() {
            const { address, parameter, token, successFn } = this.props;
            const that = this;
            $.request({
                url: address,
                data: parameter,
                token: token,
                yesFn: function (data) {
                    that.setState({ data })
                    if (successFn) {
                        successFn(data);
                    }
                }
            })

            // axios.post(address, parameter).then(function (response) {
            //     if (response.status === 200) {
            //         console.log(response);
            //         const { data } = response;
            //         console.log(data);
            //         that.setState({ data })
            //         if (successFn) {
            //             successFn(data);
            //         }
            //     }
            // }).catch(function (error) {
            //     console.log(error);
            // });
        }


        static getDerivedStateFromProps(nextProps, prevState) {
            // console.log(nextProps)
            // console.log(prevState)
            const nowProps = { ...nextProps.parameter }
            if (prevState.prevProps) {
                if (JSON.stringify(prevState.prevProps) !== JSON.stringify(nowProps)) {
                    return {
                        data: null,
                        prevProps: nowProps
                    }
                } else {
                    return null
                }

            } else {
                return {
                    prevProps: nowProps
                }
            }

        }


        // componentWillReceiveProps (nextProps){
        //     if(JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
        //         const { address, parameter, successFn } = this.props;
        //         const that = this;
        //         $.request({
        //             url:address,
        //             data:parameter,
        //             yesFn:function(data){
        //                 that.setState({ data })
        //                 if (successFn) {
        //                     successFn(data);
        //                 }
        //             }
        //         })
        //     }
        // }



        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.state.data === null) {
                const { address, parameter, token, successFn } = this.props;
                const that = this;
                $.request({
                    url: address,
                    data: parameter,
                    token: token,
                    yesFn: function (data) {
                        that.setState({ data })
                        if (successFn) {
                            successFn(data);
                        }
                    }
                })
            }
        }


        onChange(page, pageSize) {
            // console.log(this.props);
            const { address, parameter, successFn } = this.props;
            parameter.pageSize = pageSize;
            parameter.pageNum = page;
            const that = this;
            $.request({
                url: address,
                data: parameter,
                yesFn: function (data) {
                    that.setState({ data, prevProps: parameter })
                    if (successFn) {
                        successFn(data);
                    }
                }
            })
            // axios.post(address, parameter).then(function (response) {
            //     if (response.status === 200) {
            //         console.log(response);
            //         const { data } = response;
            //         console.log(data);
            //         that.setState({ data })
            //         if (successFn) {
            //             successFn(data);
            //         }
            //     }
            // }).catch(function (error) {
            //     console.log(error);
            // });
        }
        onShowSizeChange(current, pageSize) {
            // console.log(current, pageSize);
            const { address, parameter, successFn } = this.props;
            parameter.pageSize = pageSize;
            parameter.pageNum = current;
            const that = this;
            $.request({
                url: address,
                data: parameter,
                yesFn: function (data) {
                    that.setState({ data, prevProps: parameter })
                    if (successFn) {
                        successFn(data);
                    }
                }
            })
            // axios.post(address, parameter).then(function (response) {
            //     if (response.status === 200) {
            //         console.log(response);
            //         const { data } = response;
            //         console.log(data);
            //         that.setState({ data })
            //         if (successFn) {
            //             successFn(data);
            //         }
            //     }
            // }).catch(function (error) {
            //     console.log(error);
            // });
        }
        render() {
            return (
                <div>
                    {this.state.data && this.state.data.data != 'null' ? (
                        <WrappedComponent parent={this.props} data={this.state.data} >
                            <Pagination
                                showQuickJumper
                                showSizeChanger
                                size='small'
                                defaultCurrent={this.state.data.pageNum}
                                defaultPageSize={this.state.data.pageSize}
                                total={this.state.data.total}
                                onChange={this.onChange.bind(this)}
                                onShowSizeChange={this.onShowSizeChange.bind(this)}
                            />
                        </WrappedComponent>
                    ) : null}

                </div>
            )
        }
    }
    return NewComponent
}