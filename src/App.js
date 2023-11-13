import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Entrar from './pages/entrada/entrada';
import { Route,BrowserRouter, Routes} from 'react-router-dom';




function App() {
return(

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Entrar/>} />
    <Route path="/Home" element={<Home/>} />
   



    </Routes>
    
    
    </BrowserRouter>


);
}

export default App;
