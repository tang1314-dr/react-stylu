import React, { Component } from 'react'
class cls extends Component {

    aihao = [
        {
            name: "唱歌",
            value: 'sing',
            checked: false
        },
        {
            name: "跳舞",
            value: 'dance',
            checked: false
        },
        {
            name: "跑步",
            value: 'running',
            checked: false
        },
        {
            name: "写代码",
            value: 'code',
            checked: false
        },
    ]
    state = {
        user: {
            name: "admin",
            pass: "123",
            sex: "女",
            hobby: ['code'],
            job: "php",
            des: "eeee",
            isAgree: true
        }
    }
    change(e, n, index) {
        switch (n) {
            case 'hobby':
                this.aihao[index].checked = !this.aihao[index].checked
                var arr = this.aihao.filter(item => item.checked)
                this.state.user[n] = arr.map(item => item.value)
                break
            case 'isAgree':
                this.state.user[n] = e.target.checked
                break;
            default:
                this.state.user[n] = e.target.value
        }
        this.setState({})
    }
    componentDidMount(){
        this.aihao.forEach(item=>{
            if(this.state.user.hobby.indexOf(item.value)!==-1){
                item.checked=true
            }else{
                item.checked=false
            }
        })
    }
    render() {
        return (
            <div>
                <h1>完整版</h1>
                <div>
                    账号：<input type="text" value={this.state.user.name} onChange={(e) => this.change(e, 'name')} />
                </div>
                <div>
                    密码：<input type="password" value={this.state.user.pass} onChange={(e) => this.change(e, 'pass')} checked={this.state.user.sex === '女'} />
                </div>
                <div>
                    性别：
                    <input type="radio" name="sex" value='男' onChange={(e) => this.change(e, 'sex')} checked={this.state.user.sex === '男'} />男
                    <input type="radio" name="sex" value='女' onChange={(e) => this.change(e, 'sex')} checked={this.state.user.sex === '女'} />女

                </div>
                <div>
                    爱好:
                    {this.aihao.map((item, index) => (
                        <span key={item.value}><input type="checkbox" onChange={(e) => this.change(e, 'hobby', index)} checked={this.state.user.hobby.indexOf(item.value) !== -1} />{item.name} </span>
                    ))}
                </div>
                <div>
                    工作:
                    <select value={this.state.user.job} onChange={(e) => this.change(e, 'job')} >
                        <option value="web">web</option>
                        <option value="php">php</option>
                        <option value="java">java</option>
                        <option value="ui">ui</option>
                    </select>
                </div>
                <div>
                    备注：
                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => this.change(e, 'des')} value={this.state.user.des}></textarea>
                </div>
                <div>
                    请同意
                    <input type="checkbox" onChange={(e) => this.change(e, 'isAgree')} checked={this.state.user.isAgree} />
                </div>
                <div>
                    <button onClick={() => { console.log(this.state.user) }}>
                        提交
                    </button>
                </div>
            </div>
        )
    }
}
export default cls