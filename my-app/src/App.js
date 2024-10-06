import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             title : "سلام دوستان عزیزم"
//         }
//         // this.handleSetTitle = this.handleSetTitle.bind(this)
//     }

//     handleSetTitle = ()=>{
//         this.setState({
//             title:"به کدیاد خوش آمدید"
//         })
//     }

//     // handleSetTitle(){
//     //     this.setState({
//     //         title:"به کدیاد خوش آمدید"
//     //     })
//     // }

//     render(){
//         return (
//         <div className="main">
//             <Hello title={this.state.title}/>        
//             <Timer x={this.handleSetTitle}/>
//         </div>
//         ) 
//     }
// }

const App = ()=>{
    const [title , setTitle] = useState("سلام دوستان عزیزم");
    const [isLight, setIsLight] = useState(false);
    const [listArr, setListArr] = useState(["00:12:30", "10:30:29", "11:22:52"])

    const handleSetIsLight = ()=>{
        setIsLight(!isLight);
    }

    return (
        <div className="main" style={{background:isLight ? "white" : "black"}}>
            <Hello title={title}/>        
            <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}/>
            <TimeList >
                {listArr}
            </TimeList>
        </div>
    ) 
}


export default App;
