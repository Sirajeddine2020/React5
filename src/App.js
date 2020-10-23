import React from 'react';
import HideText from './components/HideText';
import './App.css';
import Counter from './components/Counter';



class App extends React.Component {
  state={Person : { fullName:"Sirajeddine Bouasker",
                   bio: "35 years old, from Nabeul, sirajdinho@hotmail.com",
                   imgSrc:"/newCoder.jpg", 
                   profession: "web developer" } ,
        show:true};
    render() {
    return (
      <>
     
	  
	   <HideText/>
     <Counter/>   
      
    </>
       ) }
    
  
  
}


export default App;
