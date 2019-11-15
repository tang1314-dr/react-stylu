import React, { Component } from 'react'
class cls extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.item.name}</h1>
                <button onClick={()=>this.props.del(this.props.item.id)}>删除</button>
                <button onClick={()=>this.props.deli(this.props.i)}>删除</button>
            </div>
        )
    }
}
export default cls