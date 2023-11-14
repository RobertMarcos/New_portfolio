
import { Link } from 'react-router-dom';
import './header.css'
import { Helmet } from 'react-helmet';



function Auto(){
    
     window.scrollTo(0,100);
     
     
}

function Auto2(){
    
    window.scrollTo(0,700);

    
}



function Auto3(){
    
    window.scrollTo(0,1400);

    
}

function Header(){
  
return(
    <>
    <Helmet>
        <title> Portfolio - Robert Marcos</title>
    </Helmet>
     <header className="menu">

        <Link to={'/'} id='logo'> &#9001;&#123;RM&#125;&#9002;</Link>  

         <nav className='links'>    
        <a href='#cont1'>Home</a>
        <a href='#cont2'>Projetos</a>
        <a href="#cont3">Tecnologias</a>
        </nav>   
            
      
      
     </header>
     </>
)
        
}

export default Header