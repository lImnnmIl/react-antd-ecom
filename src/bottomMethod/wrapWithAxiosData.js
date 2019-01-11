import React, { Component } from 'react'
import Way from './Way';


const $ = new Way();
// const axios = require('axios');

export default (WrappedComponent, successFn) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = { data: null }
        }

        componentDidMount() {
            const { address, parameter, successFn } = this.props;
            const that = this;
            $.request({
                url: address,
                data: parameter,
                yesFn: function (data) {
                    that.setState({ data })
                    if (successFn) {
                        successFn(data);
                    }
                }
            })
            // axios.post(address, parameter).then(function (response) {
            //     console.log(response);
            //     if (response.status === 200) {
            //         console.log(response);
            //         const { data } = response;
            //         console.log(typeof data);
            //         that.setState({ data: data })
            //         if (successFn) {
            //             successFn(data);
            //         }
            //     }
            // }).catch(function (error) {
            //     console.log(error);
            // });
        }

        componentWillReceiveProps(nextProps) {
            if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
                const { address, parameter, successFn } = this.props;
                const that = this;
                $.request({
                    url: address,
                    data: parameter,
                    yesFn: function (data) {
                        that.setState({ data })
                        if (successFn) {
                            successFn(data);
                        }
                    }
                })
            }
        }

        render() {
            return this.state.data ? (<WrappedComponent parent={this.props} data={this.state.data} />) : null
        }
    }
    return NewComponent
}