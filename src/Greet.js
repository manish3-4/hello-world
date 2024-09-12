//component name always start with capitial letter
//keep function name same as file name

//import React from "react"

//conent will always be inside curli brases with double quotes.
// export function Greet(){
//    // return <h1>{"hello"}</h1>
//    // return React.createElement('h1', null, 'hello')
//     return (<><h1 style={{color:"red"}}></h1> 
// }

// export function Greet(){
//     const Click = () =>{
//         alert("Clicked");
//     }
//     return (<button onClick={Click}>click me</button>)
// }

// export function Greet(){
//     var num = 5;
//     var fac = 1;
//     while (num > 0){
//         fac*= num;
//         num--;
//     }
//     const fact = () =>{
//         alert(fac);
//     }
//     return (<button onClick={fact}>factorial</button>)
// }

export function Greet(){
    const list = ["Red", "Blue", "Green"];
    return (
        <ol>
            {list.map((item, index) =>(
            <li key={index}>{item}</li>))}
        </ol>
    )
}