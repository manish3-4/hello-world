//component name always start with capitial letter
//keep function name same as file name

import React from "react"

//conent will always be inside curli brases with double quotes.
export function Greet(){
   // return <h1>{"hello"}</h1>
    return React.createElement('h1', null, 'hello')
}