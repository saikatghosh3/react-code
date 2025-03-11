// import { useState } from 'react';
// import FetchData from './components/FetchData';
import './index.css';
// import Lightning from './components/Light';
// import UseState from './components/UseState';


// import UseEffectHook  from './components/Useeffecthook';
// import UseRefHook from './components/UseRefHook';
// import UseMemoHook from './components/UseMemoHook';
// import UseCallBackhook from './components/UseCallBackhook';
// import Profile from './Profile';
// import Footer from './Footer';
// import UselayoutEffectHook from './UselayoutEffectHook';
// import Todo from './components/Todo';
// import UseEffect from './components/UseEffect';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
function App() {

  // Example 1
  // const [color, setColor] = useState("red");

  // const changeColor = () => {
  //   setColor("blue"); // Correct way to update state
  // };

  // Example 2
// const  [car, setCar] = useState({
//   brand: "Ferrari", 
//   model: "Roma",
//   year: "2003",
//   color: "red"
// });

// const changeColor = ()=>{
//   setCar((prev)=>{
//     return {...prev, color: "blue"}
//   })
// }


// Example 3

// const [ count, setCount] = useState(0);
// const increaseCount = () =>{
// setCount(count => count +1);
// }
// const decreaseCount = () =>{
// setCount(count => count -1);
// }





  return (
    <div>
      {/* Example 1  */}
      {/* <h1>My favourite color is {color}</h1>   
      <button onClick={changeColor}>Change Color</button> */}
 {/* Eamaple 2 */}
 {/* <h1> MY {car.brand}</h1>
 <h2>It is a {car.color} {car.model} from {car.year}</h2>
 <button onClick={changeColor}>Blue</button>
 */}
 
 {/* Example 3 */}

{/*  
 <h1> count : {count}</h1>
 <button onClick={increaseCount}>Increase</button>
 <button onClick={decreaseCount}>Decrease</button> */}
 {/* <UseEffectHook /> */}
 {/* <UseRefHook/> */}
    {/* <UseMemoHook /> */}

    {/* <UseCallBackhook/> */}
    {/* <Profile/>
    <Footer/> */}
  {/* <UselayoutEffectHook/> */}
  {/* <FetchData /> */}
  {/* <Todo /> */}
{/* <UseState /> */}

{/* <UseEffect/> */}
  
  {/* Routing tutorial  */}
<Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  
  
    </div>

  );
}

export default App;
