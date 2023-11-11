import './header.css'



function Auto(){
    
     window.scrollTo(0,100);

     
}

function Auto2(){
    
    window.scrollTo(0,1000);

    
}

function Header(){
  
return(
    <>
     <header className="menu">

         <a id='logo' href='#'>&#9001;&#123;RM&#125;&#9002;</a>  

         <nav className='links'>    
        <a onClick={Auto}>Home</a>
        <a onClick={Auto2}>Projetos</a>       
        <a href="sobre.html">sobre</a>
        <a href="sobre.html">Certificados</a>
        </nav>   
            
      
      
     </header>
     </>
)
        
}

export default Header