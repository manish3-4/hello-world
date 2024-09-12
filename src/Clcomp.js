import React from "react";
// export class Clcomp extends React.Component{
//     render(){
//         return <h1>{"hello, class component there"}</h1>
//     }
// }


// export class Clcomp extends React.Component{
//    constructor(props){
//     super(props);
//     this.name = props.name;
//     this.age = props.age;
//    }
//    display(){
//     return (<>
//         <h1>{this.name}{this.age}</h1>
//         <h1>{this.age}</h1>
//         </>)
    
//    }
//    render(){
//     return (<h1>{this.display()}</h1>
//     )
//    }
// }

export class Clcomp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            age:31
        }
    }

   click=()=>{ this.setState({
        age:this.state.age+1
    })}
    render(){
        return(<>
        <h1>{this.age}</h1>
        <button onclick={this.click}>Click</button>
    </>
        ) }
}