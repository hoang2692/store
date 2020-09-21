import React from 'react';

function Democlick(){
    const handonclick = (messager) =>{
        alert(messager)
    }

    return(
        <div>
        <button onClick={() => handonclick("Hello")}>Click Me</button>
        </div>
        )
}
export default Democlick;