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
import {FaLinkedinIn,FaGithub,FaMailBulk} from "react-icons/fa";


let text1 = "Linkedin"
let text2 = "GitHub"
let text3 = "Gmail"

function Up () {

    window.scrollTo(1000,0);
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
        words:['Desenvolvedor Java','Cientista De Dados'],
        loop:{Infinity},
        
    })


    return(
        <>
        <Header />
        
            <section className="cont1">

                <div className="im1"><img src={img0} alt="perfil"/></div>

                <h2 className="t1">ROBERT: {text}</h2>
               <div className="p1"> 
                    <p>  Apaixonado pela tecnologia e inovação, participei do <strong>programa ONE</strong> e adquiri habilidades e 
                conhecimentos em desenvolvimento com <strong>java e banco de dados</strong>, comecei a realizar o  curso de 
                Introdução a banco de dados no SENAI para poder completar a minha formação. Estou determinado 
                a contribuir e crescer no 
                campo da tecnologia, busco oportunidades que me permitam aplicar a minha paixão e habilidades.
                </p>
                <nav className="socialm">
                
                <a href="https://www.linkedin.com/in/robert-dos-prazeres-marcos-dev-back-end/" target="_blank"><FaLinkedinIn/> {text1}</a>
                
                <a href="https://github.com/RobertMarcos" target="_blank"><FaGithub/> {text2}</a> 
                
                <a onClick={copy}><FaMailBulk/> {text3} </a>
                
                </nav>
                
                 </div>


        <span className="Scroll" id="Scroll" onClick={Up}> ^ </span>
               
            </section>


            <section className="cont2">

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
                        <p>Conversor de moedas simples, Feito em java durante especialização em back-end no programa ONE</p>
                        
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

            <section className="cont3">
                <div className="img-certs">
                    <img src={img5} />
                </div>

            </section>


        <Footer />

        </>
    );
    
}




export default Home