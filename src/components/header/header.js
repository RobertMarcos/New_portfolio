
import './header.css'



function Auto(){
    
     window.scrollTo(0,100);
     
     
}

function Auto2(){
    
    window.scrollTo(0,800);

    
}



function Auto3(){
    
    window.scrollTo(0,1500);

    
}

function Header(){
  
return(
    <>
     <header className="menu">

         <a id='logo' href='#'>&#9001;&#123;RM&#125;&#9002;</a>  

         <nav className='links'>    
        <a onClick={Auto}>Home</a>
        <a onClick={Auto2}>Projetos</a>
        
      

        <a onClick={Auto3}>Certificados</a>
        </nav>   
            
      
      
     </header>
     </>
)
        
}

export default Header