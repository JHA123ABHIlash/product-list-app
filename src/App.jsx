import { useState } from 'react'

import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
const item=[
  {name:"Nirma",
    date:new Date("2002-08-05")
  },
  {
    name:"Sirf Excel",
    date:new Date("2012-1-15")
  },
  {
    name:"Tide",
    date:new Date("2007-10-19")
  },
   {
    name:"Ghari",
    date:new Date("1972-3-25")
  }
];


  const [newitem,setNewitem]=useState(item);



 function printFormData(data){
        console.log("I'm in form data");
        console.log(data);
        setNewitem([...newitem, {name:data.title,date:new Date(data.date)}]);
  }



  return (
    <>

     <ProductForm formdata={printFormData}/>
      <ProductList item={newitem}/> 
      
   
       
      

    </>
  )
}

export default App;
