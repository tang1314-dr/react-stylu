import React,{Component} from 'react'

import Header from './header'
import Body from './body'
class Blog extends Component{
    arr={
        header:{
            url:'http://p2.qhimgs4.com/t01f38a624309a42e9f.jpg',
            name:'张三',
            con:'一个帅的人',
        },
        blog:[
            {
                title:'新闻1',
                con:'内容1',
                id:'1'
            },
            {
                title:'新闻2',
                con:'内容2',
                id:'2'
            },
            {
                title:'新闻3',
                con:'内容3',
                id:'3'
            }
        ]
    }

    render(){
        return(
            <div>
                <Header item={this.arr.header}></Header>
                <Body item={this.arr.blog}></Body>
            </div>
        )
    }
}
export default Blog