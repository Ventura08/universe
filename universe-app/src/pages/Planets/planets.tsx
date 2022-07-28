import { useCallback, useEffect, useState } from "react";
import { usePlanets } from "../../hooks/usePlanets";
import { Planets } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PlanetService } from "../../services/PlanetService";
import Earth from '../../assets/terra.svg'
import Saturn from '../../assets/saturno.svg'
import Mars from '../../assets/terra.svg'
import Neptune from '../../assets/terra.svg'
import Uranus from '../../assets/saturno.svg'
import Jupiter from '../../assets/terra.svg'
import Mercury from '../../assets/saturno.svg'
import Venus from '../../assets/saturno.svg'

export function PlanetsList() {
  const [planets, setPlanets] = useState<{ bodies: Planets[] }>();
  
  const getAll = useCallback(async () => {
    const { status, data } = await PlanetService.getAll();

    if (status !== 200) throw new Error();

    setPlanets(data);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

  let filterPlanet = planets?.bodies.filter(item => item.isPlanet == true)
  let image = null;

  return (
    <Swiper style={{background:"#1D1E24"}}
    spaceBetween={50}
    slidesPerView={6}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
      {filterPlanet?.map((item) => {
        image = checkImage(item.englishName);
        return (
            <SwiperSlide className="d-flex justify-content-center align-items-center" style={{border:'1px solid #AEAEAE','borderRadius':'40px', flexDirection:"column", background:'linear-gradient(to bottom, rgba(79, 79, 79, 1), rgba(29, 30, 36, 0))'}}>
              <img src={image} alt=""/>
              <p style={{color:'#FFAB07', fontSize:'18px', textShadow:'2px 2px 5px rgba(218, 218, 218, 0.25)'}}>{item.englishName}</p>
            </SwiperSlide>
        );
      })}
     </Swiper>
  );
}

function checkImage(name: String) {
  switch(name){
    case 'Uranus': return Uranus
    break;
    case 'Neptune': return Neptune
    break;
    case 'Jupiter': return Jupiter
    break;
    case 'Mars': return Mars
    break;
    case 'Mercury': return Mercury
    break;
    case 'Earth': return Earth
    break;
    case 'Venus': return Venus
    break;
    case 'Saturn': return Saturn
    break;
  }
}
