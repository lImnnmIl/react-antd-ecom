import React, { Component } from 'react';
import Time from '../../img/time.png';
import TimeStart from '../../img/timeStart.png';
import Way from '../../bottomMethod/Way';

const $ = new Way();

class CountDown extends Component {
    constructor() {
        super()
        this.state = {
            time: ['--', '--', '--', '--'],
            isStart: 0,
            timer:null
        }
    }
    componentDidMount() {
        const that = this;
        $.request({
            url: $.open, yesFn: function (data) {
                const nowTime = new Date();
                let Time;
                if (nowTime < new Date(data.amStartTime)) {
                    Time = data.amStartTime;
                    that.setState({ isStart: 0 });
                } else if (data.amEndTime == data.pmStartTime) {
                    Time = data.pmEndTime;
                    that.setState({ isStart: 1 });
                } else if (nowTime > new Date(data.amStartTime) && nowTime < new Date(data.amEndTime)) {
                    Time = data.amEndTime;
                    that.setState({ isStart: 1 });
                } else if (nowTime > new Date(data.amEndTime) && nowTime < new Date(data.pmStartTime)) {
                    Time = data.pmStartTime;
                    that.setState({ isStart: 0 });
                } else if (nowTime > new Date(data.pmStartTime) && nowTime < new Date(data.pmEndTime)) {
                    Time = data.pmEndTime;
                    that.setState({ isStart: 1 });
                } else {
                    Time = data.amStartTime;
                    that.setState({ isStart: 0 });
                }
                $.countdown(new Date(Time.replace(/-/g, '/').replace(/T|Z/g, ' ').trim()).getTime(), function (data,now,timer) {
                    // console.log(data);
                    data.map((v, k) => {
                        data[k] = v > 9 ? data[k] : `0${data[k]}`
                    })
                    that.setState({ time: data, timer: timer})
                })
            }
        })
    }
    componentWillUnmount(){
        clearTimeout(this.state.timer)
    }

    render() {
        return(
            <div className="layui-col-xs2 count">
                <img src={this.state.isStart?Time:TimeStart} alt="" />
                <div className="count-down layui-row">
                    <span className="layui-col-xs4">{this.state.time[1]}</span>
                    <span className="layui-col-xs4">{this.state.time[2]}</span>
                    <span className="layui-col-xs4">{this.state.time[3]}</span>
                </div>
            </div>
        )
    }
}

export default CountDown;