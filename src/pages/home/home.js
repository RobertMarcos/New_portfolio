import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import img1 from '../../components/images/foto.jpeg';
import img2 from '../../components/images/conhome.png';
import img3 from '../../components/images/conver2.png';
import img4 from '../../components/images/Batalha_B.png';
import img5 from '../../components/images/sobre.png';
import { Typewriter,useTypewriter,Cursor } from "react-simple-typewriter";
import './home.css'
import {FaLinkedinIn,FaGithub,FaMailBulk} from "react-icons/fa";





function Home(){
    const [text] = useTypewriter({
        words:['Desenvolvedor Java','Cientista De Dados'],
        loop:{Infinity},
        
    })

    

    return(
        <>
        <Header />
        
            <section className="cont1">

                <div className="im1"><img src={img1} alt="perfil"/></div>

                <h2 className="t1">ROBERT: {text}</h2>
               <div className="p1"> 
                    <p>  Apaixonado pela tecnologia e inovação, participei do <strong>programa ONE</strong> e adquiri habilidades e 
                conhecimentos em desenvolvimento com <strong>java e banco de dados</strong>, comecei a realizar o  curso de 
                Introdução a banco de dados no SENAI para poder completar a minha formação. Estou determinado 
                a contribuir e crescer no 
                campo da tecnologia e busco oportunidades que me permitam aplicar a minha paixão e habilidades.
                </p>
                <div className="socialm"><FaLinkedinIn/> <a href="https://github.com/RobertMarcos" target="_blank"><FaGithub/></a> <FaMailBulk/></div>
                 </div>
               
            </section>


            <section className="cont2">
                <div className="im2"></div>
                <h2 className="t2">Ola tudo bem ? </h2>
                <p className="p2">uma casa não é um lar de charlis morrom </p>
               
            </section>

           
        
        

        <Footer />

        </>
    );
    
}




export default Home