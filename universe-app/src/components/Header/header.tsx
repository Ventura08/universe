import React , {useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import {
    UserOutlined,
  } from '@ant-design/icons';

export function Header(props: any) {
    const [controlMenuDown, setControlMenuDown] = useState(false)
    const [currentWidthScreen, setCurrentWidthScreen] = useState(0)

    const changeMenuDown = () =>  {
        setControlMenuDown(!controlMenuDown)
    }

    useEffect (() => {
        setCurrentWidthScreen(window.innerWidth)
    },[])

    useEffect (() => {
        window.addEventListener('resize', () => setCurrentWidthScreen(window.innerWidth))
    }, [])

    const isMenuAvailable = controlMenuDown && currentWidthScreen < 760


    return(
        <div className='' style={{background: "#1D1E24", color: "#ffff"}}>
           <header className='d-flex justify-content-between align-items-center' style={{height:"80px"}}>
               <div>
                   <img src={props.image} alt="logo"  style={{margin: '0px 20px', width:'200px', height:'60px', objectFit:"cover"}}/>
               </div>

                <div className='h-100'>
                    <ul className='h-100 d-flex justify-content-center align-items-center list-unstyled'>
                       <Link className=' text-decoration-none' to='/Posts' style={{color:"#fff", margin:"0px 24px 0px 0px"}}><li>Posts</li></Link>
                       <Link className=' text-decoration-none' to='/Albuns' style={{color:"#fff",margin:"0px 24px"}}><li>Albuns</li></Link>
                       <Link className=' text-decoration-none' to='/ToDos' style={{color:"#fff",margin:"0px 24px"}}><li>ToDos</li></Link>
                    </ul>
                </div>

                <div className='w-10 h-100 d-flex justify-content-end align-items-center' style={{margin: '0px 100px'}}>
                <UserOutlined />
                </div>
           </header>
        </div>
    )
}