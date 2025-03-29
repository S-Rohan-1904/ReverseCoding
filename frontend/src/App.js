
import React,{useEffect,useState} from 'react';
import Question from './components/Question/Question';
import Main from './components/main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/App.css'
import Loader from './components/Loader/Loader';
import Accordion from './components/Accordion';
import axios from 'axios';
import Py from './components/Py';



export default function App() {




  // const [load,setLoad] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(true)
  //   }, 1000);
  // }, [])
  
  return (  
    <div>
   {/* { !load ?<div><Loader /></div> : <div> */}
   <BrowserRouter>
   <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/linux" render={() => <Accordion os={"linux"} />} />
        <Route path="/windows" render={() => <Accordion  os={"windows"} />} />   
        <Route path="/macos" render={() => <Accordion  os={"macos"} />}/>          
      </Switch>
    </BrowserRouter>
   
   
    </div>
// } 

    // </div>    


    
    
  );
}
