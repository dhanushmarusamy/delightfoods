// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home';
import Footer from './Components/Footer';
import Masala from './pages/Masala';
import Pickle from './pages/Pickle';
import Sweet from './pages/Sweet';
import Upload from './pages/Upload';
import Getdelete from './pages/Getdelete';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Validation from './pages/Validation';
function App() {
  return (
    <div className="App">
   
  <BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/LADDU' element={<Sweet/>}/>
  
  <Route path='/mASALA' element={<Masala/>}/>
<Route path='/PICKLE' element={<Pickle/>}/>
<Route path='/m' element={<Upload/>}/>
<Route path='/upload' element={<Getdelete/>}/>
<Route path='edit/:id'element={<Edit/>}/>
<Route path='/register'element={<Register/>}/>
<Route path='/login'element={<Login/>}/>
<Route path='/validation'element={<Validation/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
