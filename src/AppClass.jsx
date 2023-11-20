import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  


  // code here
  render(){
    const imgData = this.props.data;
    return(
      <>
        <div><h1>Kalvium Gallary</h1></div>
        <div className="imagess">
            {imgData.map((item)=>{
            return <img key ={item.id} src = {item.img}/>
            })}
        </div>
      </>
    )
  }
}