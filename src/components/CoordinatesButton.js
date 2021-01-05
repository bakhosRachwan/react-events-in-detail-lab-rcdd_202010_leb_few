import React from 'react';

class CoordinatesButton extends React.Component {
  reduce (){
    const coord = (e) =>{
      return [e.clientX, e.clientY]
    }
    return(
      <div><button onClick={coord}></button></div>
    )
  }
}
export default CoordinatesButton
