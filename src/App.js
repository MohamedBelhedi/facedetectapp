import logo from './logo.svg';
import './App.css';
import React,{Component,useEffect} from 'react'
import Camera1 from './components/camera.jsx';



// import  Daten  from './json/DatenOOP';





class App extends Component{
  constructor(){
    super()
    // this.useEffect(() => {
    //   window.process = {
    //     ...window.process,
    //   };
    // }, []);
   
  }


render(){



  return (
    <div className="App">
      <header className="App-header">

<Camera1/>

           </header>
    </div>
  );
}
}
export default App;


   
      {/* map funtion für die einzelnen funktionen {Daten.map(({click,id,button1})=>(
        <div onClick={click}>

        {id}-{button1}


        </div>

      ))} */}