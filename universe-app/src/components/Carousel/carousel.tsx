import { useCallback, useEffect, useState } from "react";
import { Planets } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PlanetService } from "../../services/PlanetService";
import Earth from '../../assets/earth.png'
import Saturn from '../../assets/saturn.png'
import Mars from '../../assets/mars.png'
import Neptune from '../../assets/neptune.png'
import Uranus from '../../assets/uranus.png'
import Jupiter from '../../assets/jupiter.png'
import Mercury from '../../assets/mercury.png'
import Venus from '../../assets/venus.png'
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import Item from "antd/lib/list/Item";

interface PlanetCurrent {
  id:string;
  englishName: string;
  gravity: string;
  sideralOrbit: string;
  inclination:string
}

export function CarouselPlanets() {
  const [currentWidthScreen, setCurrentWidthScreen] = useState(0)
  const [planets, setPlanets] = useState<{ bodies: Planets[] }>();
  const [loading, setLoading] = useState<boolean>(true);

  let filterPlanet = planets?.bodies.filter(item => item.isPlanet === true)
  let image = null;
  const isSlidePerViewAvaliable = currentWidthScreen > 1000 ? 4 : 2;

  useEffect (() => {
      setCurrentWidthScreen(window.innerWidth)
  },[])

  useEffect (() => {
      window.addEventListener('resize', () => setCurrentWidthScreen(window.innerWidth))
  }, [])

  const getAll = useCallback(async () => {
    const { status, data } = await PlanetService.getAll();

    if (status !== 200) throw new Error();

    setPlanets(data);
    await setLoading(false);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);


function checkImage(name: string) {
  switch(name){
    case 'Uranus': return Uranus
    case 'Neptune': return Neptune
    case 'Jupiter': return Jupiter
    case 'Mars': return Mars  
    case 'Mercury': return Mercury 
    case 'Earth': return Earth  
    case 'Venus': return Venus
    case 'Saturn': return Saturn
  }
}

function selectPlanet(id: string) {
    let planetCurrent = filterPlanet?.find((item) => item.id === id)
    return planetCurrent
}

console.log(filterPlanet)

if(!loading) {
  return (
    <Swiper style={{background:"#1D1E24", padding:'40px 24px 40px 24px', height:'100%'}}
    spaceBetween={50}
    slidesPerView={isSlidePerViewAvaliable}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
      {filterPlanet?.map((item) => {
        image = checkImage(item.englishName);
        return (
            <SwiperSlide onClick={() => selectPlanet(item.id)} key={item.id} className="d-flex justify-content-center align-items-center" style={{border:'1px solid #AEAEAE','borderRadius':'40px', flexDirection:"column", background:'linear-gradient(to bottom, rgba(79, 79, 79, 1), rgba(29, 30, 36, 0))', height:'320px', zIndex:'2', cursor:'pointer'}}>
              <img src={image} alt="" style={item.englishName === 'Saturn' ? {marginTop: '-24px', width:'80%', height:'80%', objectFit:'contain'} : {marginTop: '-24px', width:'60%', height:'70%', objectFit:'contain'}}/>
              <p style={{color:'#FFAB07', fontSize:'24px', textShadow:'2px 2px 5px rgba(218, 218, 218, 0.25)', paddingTop:'10px'}}>{item.englishName}</p>
              <div className="d-flex justify-content-around flex-wrap w-100" style={{color:'#FFFF', fontSize:'18px', marginBottom:'10px'}}>
                <div>
                  <p style={{margin:0, padding:0}}>Massa</p>
                  <span>{item.gravity}</span>
                </div>
                <div>
                  <p style={{margin:0, padding:0}}>Orbita</p>
                  <span>{item.sideralOrbit}</span>
                </div>
                <div>
                  <p style={{margin:0, padding:0}}>Inclinação</p>
                  <span>{item.inclination}</span>
                </div>
              </div>
            </SwiperSlide>
        );
      })}
     </Swiper>
  );
}
  return(
   <div className="d-flex justify-content-center" style={{marginTop: '20px'}}>
     <Spin size="large"/>
   </div>
  )
  
  
}
