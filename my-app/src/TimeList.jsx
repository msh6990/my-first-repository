import Item from './Item'

const TimeList = (props)=>{
    return (
        <div className="main-time-list">
            {props.children.map((p)=>{
                {console.log("before Item tag : " + p)}
                    <Item key={Math.random()}>{p}</Item>
                {console.log("after Item tag")}
            })}
            
        </div>
    )
}

export default TimeList;