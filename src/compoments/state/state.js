import React, { Component } from
    'react'
class cls extends Component {
    num = 10;
    state = {
        name: "赵丽颖",
        arr: [
            {
                id: 1,
                title: "新闻1"
            },
            {
                id: 2,
                title: "新闻2"
            },
            {
                id: 3,
                title: "新闻3"
            },
        ],
        json: {
            name: "霍建华",
            sex: "男",
            age: 30
        },
        num: 10,
        x: 10
    }
    del(index) {
        this.state.arr.splice(index, 1)
        console.log(this.state.arr);
        this.setState({})
    }
    add(n) {
        // var json=this.state.json
        // json.age=json.age+n
        // this.setState({
        //     json
        // })   
        this.state.json.age += n
        this.setState({})

    }
    addNum(n) {
        // this.state.num += n
        // this.state.x = this.state.num
        // this.setState({})

        this.setState({
            num:this.state.num +=n,
            x : this.state.num
        })
        
        // this.setState({
        //     num:this.state.num + n
        // })
        // this.setState({
        //     x : this.state.num
        // })

        // this.setState({
        //     num:this.state.num + n
        // },()=>{
        //     this.setState({
        //         x : this.state.num
        //     })
        // })
    }
    render() {
        return (
            <div>
                {this.state.arr.map((item, index) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <button onClick={() => this.del(index)}>删除</button>
                    </div>
                ))}
                <h1>{this.state.json.name}</h1>
                <h1>{this.state.json.sex}</h1>
                <h1>{this.state.json.age}</h1>
                <button onClick={this.add.bind(this, 1)}>年龄加1</button>
                <h1>{this.state.num}</h1>
                <h1>{this.state.x}</h1>
                <button onClick={() => this.addNum(1)}>num+1</button>
            </div>

        )
    }
}
export default cls