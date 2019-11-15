import React from 'react'
function fn(props) {
    return (
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.con}</p>
        </div>
    )
}
export default fn