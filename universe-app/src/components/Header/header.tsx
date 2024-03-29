import {Link} from 'react-router-dom'
import {
    UserOutlined,
  } from '@ant-design/icons';

export function Header(props: any) {
    return(
        <div className='' style={{background: "#1D1E24", color: "#ffff"}}>
           <header className='d-flex justify-content-between align-items-center' style={{height:"80px"}}>
               <div>
                   <img src={props.image} alt="logo"  style={{margin: '0px 20px'}}/>
               </div>

                <div className='h-100'>
                    <ul className='h-100 d-flex justify-content-center align-items-center list-unstyled'>
                       <Link className=' text-decoration-none' to='/' style={{color:"#fff", margin:"0px 24px 0px 0px"}}><li>Home</li></Link>
                       <Link className=' text-decoration-none' to='/planets' style={{color:"#fff",margin:"0px 24px"}}><li>Planets</li></Link>
                       <Link className=' text-decoration-none' to='/astronauts' style={{color:"#fff",margin:"0px 24px"}}><li>Astronauts</li></Link>
                    </ul>
                </div>

                <div className='w-10 h-100 d-flex justify-content-end align-items-center' style={{margin: '0px 100px'}}>
                <UserOutlined />
                </div>
           </header>
        </div>
    )
}