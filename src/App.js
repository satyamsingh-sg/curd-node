import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/headers/Header';
import Home from './components/home/Home';
import Update from './components/update/Update';
import Signin from './components/auth/signin/Signin';
import Login from './components/auth/login/Login';
import CreateUser from './components/create/CreateUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/update/:id' element={<Update/>} />
          <Route path='/login' element={<Signin/>} />
          <Route path='/signin' element={<Login/>} />
          <Route path='/create' element={<CreateUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
