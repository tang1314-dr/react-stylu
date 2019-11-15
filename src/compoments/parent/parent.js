import React, { Component } from
    'react'
// import Child from './child'
import Item from './item'
class cls extends Component {
    state={
        num:100,
        arr:[
            {
                name:"沙漠骆驼",
                id:10
            },
            {
                name:"心如止水",
                id:11
            },
            {
                name:"孤芳自赏",
                id:12
            },
        ]
    }
    changeNum(n){
        this.setState({
            num:n
        })
    }
    del(n){
        var index=this.state.arr.findIndex(item=>item.id==n)
        this.state.arr.splice(index,1)
        this.setState({})
    }
    del1(i){
        this.state.arr.splice(i,1)
        this.setState({})
    }
    render() {
        return (
            <div>
                {/* <h1>{this.state.num}</h1>
                <Child changeParent={(n)=>this.changeNum(n)}></Child> */}
                {this.state.arr.map((item,i)=>(
                    <Item key={item.id} item={item} i={i} del={(n)=>this.del(n)} deli={(i)=>this.del1(i)}></Item>
                ))}
            </div>
        )
    }
}
export default cls