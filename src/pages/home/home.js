import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import img0 from '../../components/images/foto.jpeg';
import img1 from '../../components/images/rose.png';
import img2 from '../../components/images/barbeariaA.png';
import img3 from '../../components/images/conver2.png';
import img4 from '../../components/images/Batalha_B.png';
import img5 from '../../components/images/robert_programa.png';
import { Typewriter,useTypewriter,Cursor } from "react-simple-typewriter";
import './home.css'
import {FaLinkedinIn,FaGithub,FaMailBulk,FaJsSquare,FaHtml5,FaCss3Alt,FaFigma,
    FaReact,FaJava,FaPython,FaCloudDownloadAlt} from "react-icons/fa";

    import { SiSpring,SiMysql,SiGooglecolab,SiMicrosoftoffice } from "react-icons/si";
    import { PiCertificateBold } from "react-icons/pi";





let text1 = "Linkedin"
let text2 = "GitHub"
let text3 = "Gmail"

function Up () {

    window.scrollTo(100,0);
}


function copy() {

    const email = "robertprazeres92@gmail.com"
    navigator.clipboard.writeText(email.trim());
     text3 = "Copiado!"
    setTimeout(()=>{
         text3 = "Gmail"
    },2000)
        
}






function Home(){
    let colors = ["green","blue"];
    
    const [text] = useTypewriter({
        words:['Desenvolvedor Back-End','Cientista De Dados'],
        loop:{Infinity},
        
    });

    const [text1] = useTypewriter({
        words:['Certificados - Alura'],
        loop:{Infinity},
        
    });

    const [text2] = useTypewriter({
        words:['Currículo'],
        loop:{Infinity},
        
    });

    const observer = new IntersectionObserver((entries)=>{entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{  entry.target.classList.remove('show')
    }
    })});

    const hiddind = document.querySelectorAll('.hidding');
    hiddind.forEach((el) => observer.observe(el))


    return(
        <>
        <Header />
        
            <section className="cont1  hidding" id="cont1">

                <div className="im1"><img src={img0} alt="perfil"/></div>
                

                <h2 className="t1">ROBERT: {text}</h2>
               <div className="p1"> 
                    <p>  Apaixonado pela tecnologia e inovação, participei do <strong>programa ONE</strong> e adquiri habilidades e 
                conhecimentos em desenvolvimento com <strong>java e banco de dados</strong>, comecei  o  curso de 
                Introdução a banco de dados no SENAI para poder completar a minha formação. Estou determinado 
                a contribuir e crescer no 
                campo da tecnologia, busco oportunidades que me permitam aplicar a minha paixão e habilidades.
                </p>
                <nav className="socialm">
                
                <a href="https://www.linkedin.com/in/robert-dos-prazeres-marcos-dev-back-end/" target="_blank"><FaLinkedinIn/> Linkedin</a>
                
                <a href="https://github.com/RobertMarcos" target="_blank"><FaGithub/> GitHub</a> 
                
                <a onClick={copy}><FaMailBulk/> {text3} </a>
                
                </nav>
                
                 </div>


        <a className="Scroll" id="Scroll" href="#cont1"> ^ </a>
               
            </section>


            <section className="cont2  hidding" id="cont2">

            <h2 className="t1">PROJETOS</h2>


               {/* Box 1*/}
            <div  className="item1">
                
                <div className="item-img">
                    <img src={img1}alt="Rosas"/>
                </div>
                
                    <div class="item-txt">
                        <span><a href="https://one-rose-corte-costura.vercel.app/" target="_black">ONE-ROSE &#8658;</a></span>
                        <p>Criação de site gratuito como freelancer - One-Rose </p> 
                  
                    </div>
            </div>


           {/* Box 2*/}

            <div  class="item1">
                
                <div class="item-img">
                    <img src={img2} alt="Barbearia"/>
                </div>
                
                    <div class="item-txt">
                        <span><a href="https://barbearia-alura-eta-sandy.vercel.app/index.html" target="_blank">Barbearia Alura &#8658;</a></span>
                        <p> Site feito durante o curso de css e html na Alura  </p>
                    </div>
            </div>


               {/* Box 3*/}

            <div  class="item1">
                
                <div class="item-img">
                    <img src={img3} alt="Convertor"/>
                </div>
                
                    <div class="item-txt">
                        <span><a href="https://github.com/RobertMarcos/Conversor_de_moeda " target="_blank">Conversor De Moedas &#8658;<a/></a></span>
                        <p>Conversor de moedas simples, Feito em java durante no programa ONE.</p>
                        
                    </div>
            </div>

         {/* Box 4*/}

            <div  class="item1">
                        
                <div class="item-img">
                    <img src={img4} alt="Batalha_de_robos"/>
                </div>
                
                    <div class="item-txt">
                        <span><a href="https://github.com/RobertMarcos/battle-of-Robots" target="_black">Batalha de Robos &#8658; </a></span>
                        <p>Quem ira vencer essa incrivel disputa ? O nosso heroi ou o seu arqinimigo </p>
                       
                    </div>
            </div>
    
            
 
            </section>

            <section className="cont3  hidding" id="cont3">

            <h2 className="t1">Tecnologias</h2>

                <div className="tec">
                   <h2>Tecnologias - Front-End</h2>
                   <ul className="listagem" property="none">
                    <li> <a href="https://awari.com.br/html-css/" target="_blank" > HTML / CSS</a> </li>
                    <li> <a href="https://kenzie.com.br/blog/javascript/" target="_blank">JavaScript</a> </li>
                    <li> <a href="https://ebaconline.com.br/blog/o-que-e-figma-e-como-usar" target="_blank">Figma</a> </li>
                    <li> <a href="https://www.alura.com.br/artigos/react-js" target="_blank">React</a> </li>
                   </ul>
                       <div className="incons"><FaCss3Alt/> <FaHtml5/> <FaJsSquare/>  <FaFigma/>  <FaReact/></div>
                </div>

                
                <div className="tec">
                   <h2>Tecnologias - Back-End</h2>
                   <ul className="listagem" property="none">
                    <li> <a href="https://www.java.com/pt-BR/download/help/whatis_java.html" target="_blank" > Java</a> </li>
                    <li> <a href="https://spring.io/why-spring" target="_blank">Spring Boot</a> </li>
                    <li> <a href="https://aws.amazon.com/pt/what-is/sql/" target="_blank">SQL - MYsql</a> </li>
                    
                   </ul>
                       <div className="incons"><FaJava/> <SiSpring/> <SiMysql/> </div>
                </div>


                <div className="tec">
                   <h2>Tecnologias <br/> Ciencia de dados</h2>
                   <ul className="listagem" property="none">
                    <li> <a href="https://www.alura.com.br/artigos/python" target="_blank" > Python</a> </li>
                    <li> <a href="https://www.alura.com.br/artigos/google-colab-o-que-e-e-como-usar" target="_blank">Google-Colab</a> </li>
                    <li> <a href="https://aws.amazon.com/pt/what-is/sql/" target="_blank">SQL - MYsql</a> </li>
                    <li> <a href="https://support.microsoft.com/pt-br/office/o-que-%C3%A9-o-microsoft-365-847caf12-2589-452c-8aca-1c009797678b" target="_blank">Microsoft-365</a> </li>
                    
                   </ul>
                       <div className="incons"><FaPython/> <SiGooglecolab/> <SiMysql/>  <SiMicrosoftoffice/> </div>
                </div>

                <div className="certificados">
                        <h2> <PiCertificateBold/> <a href="https://cursos.alura.com.br/user/robertmarcos92/fullCertificate/2ef8206a06371a094ec06428718d95b8"> 
                          {text1} </a></h2>

                          <h2> <FaCloudDownloadAlt/> <a href="https://cursos.alura.com.br/user/robertmarcos92/fullCertificate/2ef8206a06371a094ec06428718d95b8"> 
                          {text2} </a></h2>

                </div>

                         
            </section>


        <Footer />

        </>
    );
    
}




export default Home