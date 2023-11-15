import { Typewriter,useTypewriter,Cursor } from 'react-simple-typewriter';
import './entrada.css'
import Home from '../home/home';
import { Route,BrowserRouter, Routes, Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';







function Type(){
    const [texto] = useTypewriter({
        words:['Bem-Vindo(A)','Meu nome é Robert e estou feliz em velo(a) por aqui','Vamos começar essa aventura ?'],
        typeSpeed: 50,
        loop:{}
        
         })

         
    return(
    <>
         
         <h2 style={{color:"Springgreen"}}>{texto}</h2>
         
         
     </>
     );

    }




function Entrar(){

   

    return(
    <>
     <Helmet>
        <title> Portfolio - Robert Marcos</title>
    </Helmet>
    
    <section className='cos1'>

    <div className='texto'>
       
       <Type/>
        
       <Link to={"/Home"}> &#8658; </Link>
    </div>


    </section>
    
    
    
    </>
);



}




export default Entrar