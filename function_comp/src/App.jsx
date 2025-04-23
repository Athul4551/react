import { useState } from 'react'
// import Sample from './Component/Sample'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Add from './Component/Add'

import { BrowserRouter,Route,Routes} from 'react-router-dom';
// import './App.css'



// function Sample() {
//   return (
//     <div>
//       <h1>sample component</h1>
//     </div>
//   )
// }



export default function App() {
  // const [count, setCount] = useState(0)
  // const [age1, setAge1] = useState(age)
  // console.log(age1)
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    < Route path='contact' element={<Contact/>}/>
    < Route path='add' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
     
  
  )
}
