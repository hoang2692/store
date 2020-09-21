import React from 'react';

function Democlick2(){
    const handonclick = () =>{
        alert("Hello-DemoClick2")
    }

    return(
        <div>
        <button onClick={handonclick}>Click Me</button>
        </div>
        )
}
export default Democlick2;