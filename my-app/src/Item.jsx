import React , {useState} from 'react';
import ReactDOM from 'react-dom';

const Item = (props)=>{
    return(
           <div>{props.children}</div>
    )
}

export default Item;