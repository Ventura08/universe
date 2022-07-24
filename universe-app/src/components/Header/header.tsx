import React , {useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'


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
           <header className='d-flex justify-content-between align-items-center' style={{height:"60px"}}>
               <div className='w-30'>
                  <Link to="/"> <img src={props.image} alt="logo"/></Link>
               </div>

                <div className='d-flex justify-content-center align-items-center w-50'>
                    <ul className='d-flex w-100 justify-content-center align-items-center'>
                       <Link className=' text-decoration-none' to='/Posts' style={{color:"#fff", margin:"0px 24px"}}><li>Posts</li></Link>
                       <Link className=' text-decoration-none' to='/Albuns' style={{color:"#fff",margin:"0px 24px"}}><li>Albuns</li></Link>
                       <Link className=' text-decoration-none' to='/ToDos' style={{color:"#fff",margin:"0px 24px"}}><li>ToDos</li></Link>
                    </ul>
                </div>

                <div className='w-20'>
                    <p>profile</p>
                </div>

                <div className="menuHamburguer" onClick={changeMenuDown} >
                <i className="fas fa-bars"/>
                </div>
           </header>
        </div>
    )
}