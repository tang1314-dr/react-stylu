import React, { Component } from
    'react'
class cls extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.changeParent(200)}>二百</button>
                <button onClick={this.props.changeParent.bind(this,2222)}>2222</button>
            </div>
        )
    }
}
export default cls