import React, { Component } from 'react'
import Item from './item'
class cls extends Component {
    render() {
        return (
            <div>
                {
                    this.props.item.map(
                        item => (
                            <Item item={item} key={item.id}></Item>
                        )
                    )
                }
            </div>
        )
    }
}
export default cls