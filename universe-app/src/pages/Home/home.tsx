import image from '../../assets/teste.jpg';
import './home.css';
import { HeartOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';


export function Home () {
        return (
            <div className='w-100 h-100' style={{position: 'relative'}}>
                <img className='w-100 h-90' style={{}} src={image} alt="" />

                <div style={{position: 'absolute', top:'100px',  color:"#fff", width:'100%'}}>
                    <div className='w-100 text-center'>
                        <h1 style={{color:'#fdab09', fontSize:'60px', marginBottom:'20px'}}>Bem-vindo ao Universe!</h1>
                        <p style={{fontSize:'20px', margin:'0 auto', width:'700px'}}>
                        Olá terráqueo, espero que esteja bem.
                        Se você é apaixonado ou tem vontade de saber mais sobre
                        o espaço, vem com a gente. Aqui você pode estudar e visualizar
                        informações sobre planetas e luas.
                        </p>

                        
                        <h4 style={{color:"#fff", fontSize:'25px', marginTop:'20px'}}>
                        Embarque nessa jornada!
                        </h4>

                        <Link to="/planets"> <button className="glow-on-hover" type="button" 
                            style={{width:'600px',
                            height:'80px', 
                            fontSize:'25px',
                            border:'none',
                            borderRadius: '8px',
                            marginTop: '20px'
                            }}>Vamos começar!</button>
                        </Link>

                        <div className='d-flex justify-content-center align-items-center' style={{margin:'20px 0px'}}>
                            <span style={{marginRight:'5px'}}>Make with</span> 
                            <HeartOutlined />
                            <span style={{marginLeft:'5px'}}>by Babi & Tevo</span>
                        </div>
                    </div>
                    
                </div>
            </div>
          );
}