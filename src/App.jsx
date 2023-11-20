import './App.css';

function App(props) {
  // code here
  const imgData = props.data; 
  return(
  
    <div>
     <div> 
      <h1>Kalvium Gallary</h1>
     </div>
      <div className="imagess">
        {imgData.map((item)=>{
          return <img key = {item.id} src={item.img}/>
        })}
      </div> 
    </div>
  )
}

export default App;
