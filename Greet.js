import React from 'react'

function Greet(){
// return (
// <div>
// <h1>
//     Hello shiva!
// functional 
// </h1>
// </div>
// );
 return React.createElement(
     'div',
     {id:'hello', className:'dummyclass'},
     React.createElement('h1',null,'Hello shiva')
 )

}

export default Greet;
