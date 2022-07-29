import { useCallback, useEffect, useState } from "react";
import { Planets } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PlanetService } from "../../services/PlanetService";
import Earth from '../../assets/earth.jpeg'
import Saturn from '../../assets/saturn.png'
import Mars from '../../assets/mars.png'
import Neptune from '../../assets/neptune.png'
import Uranus from '../../assets/uranus.png'
import Jupiter from '../../assets/jupiter.jpeg'
import Mercury from '../../assets/mercury.jpeg'
import Venus from '../../assets/venus.jpeg'

export function CarouselPlanets() {
  const [planets, setPlanets] = useState<{ bodies: Planets[] }>();
  
  const getAll = useCallback(async () => {
    const { status, data } = await PlanetService.getAll();

    if (status !== 200) throw new Error();

    setPlanets(data);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

  let filterPlanet = planets?.bodies.filter(item => item.isPlanet === true)
  let image = null;


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

  return (
    <Swiper style={{background:"#1D1E24", padding:'40px 24px 40px 24px', height:'100%'}}
    spaceBetween={50}
    slidesPerView={4}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
      {filterPlanet?.map((item) => {
        image = checkImage(item.englishName);
        return (
            <SwiperSlide className="d-flex justify-content-center align-items-center" style={{border:'1px solid #AEAEAE','borderRadius':'40px', flexDirection:"column", background:'linear-gradient(to bottom, rgba(79, 79, 79, 1), rgba(29, 30, 36, 0))'}}>
              <img src={image} alt="" style={{marginTop: '-24px', width:'60%', height:'80%', objectFit:'cover'}}/>
              <p style={{color:'#FFAB07', fontSize:'18px', textShadow:'2px 2px 5px rgba(218, 218, 218, 0.25)', paddingTop:'10px'}}>{item.englishName}</p>
              <p>description</p>
            </SwiperSlide>
        );
      })}
     </Swiper>
  );
}
