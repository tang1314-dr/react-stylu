import React from 'react'

function Header(props){
    return(
        <div>
            <h3>{props.item.name}</h3>
            <img src={props.item.url} alt="" style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
            <p>{props.item.con}</p>
        </div>
    )
}

export default Header