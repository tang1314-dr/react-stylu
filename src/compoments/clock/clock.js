import React, { Component } from 'react'
class cls extends Component {
    state={
        time:new Date
    }
    time=new Date()
    componentDidMount(){
        this.timer=setInterval(() => {
            this.setState({
                time:new Date
            })
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <h1>现在时间是：{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default cls