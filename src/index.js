//------------------------------project Basic in ReactJs----------------//


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Foot from './footer';
import Tabb from './body';


class MIweb extends React.Component{
  render(){
    return(<header>
      <div id='edit' style={{height:"40px",textAlign:"center",padding:"20px",borderRadius:"10px"}}>
      <a style={{fontSize:"30px",margin:"40px",padding:"10px",border:"1px solid black",boxShadow:"-2px  2px  10px ",borderRadius:"10px",fontStyle:"italic"}}> Home</a>
      <a style={{fontSize:"30px",margin:"40px",padding:"10px",border:"1px solid black",boxShadow:"-2px  2px  10px ",borderRadius:"10px",fontStyle:"italic"}}> About us</a>
      <a style={{fontSize:"30px",margin:"40px",padding:"10px",border:"1px solid black",boxShadow:"-2px  2px  10px ",borderRadius:"10px",fontStyle:"italic"}}> contact us</a>
      <a style={{fontSize:"30px",margin:"40px",padding:"10px",border:"1px solid black",boxShadow:"-2px  2px  10px ",borderRadius:"10px",fontStyle:"italic"}}> product</a>
      <a style={{fontSize:"30px",margin:"40px",padding:"10px",border:"1px solid black",boxShadow:"-2px  2px  10px ",borderRadius:"10px",fontStyle:"italic"}}> Services</a>
      </div> <br></br></header>
    )
  }
}
function Final(){
  return(
    <div>
    <MIweb/>
    <Tabb/>
    <Foot/>
    </div>
  )
}
ReactDOM.render(<Final/>,document.getElementById('root')); 

