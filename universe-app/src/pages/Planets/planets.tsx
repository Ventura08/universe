import { useCallback, useEffect, useState } from "react";
import { usePlanets } from "../../hooks/usePlanets";
import { Planets } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PlanetService } from "../../services/PlanetService";
import terra from '../../assets/terra.svg'
import saturno from '../../assets/saturno.svg'

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

  return (
    <Swiper style={{background:"#1D1E24"}}
    spaceBetween={50}
    slidesPerView={6}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
      {filterPlanet?.map((item) => {
        return (
      
            <SwiperSlide className="d-flex justify-content-center align-items-center" style={{border:'1px solid #AEAEAE','borderRadius':'40px', flexDirection:"column", background:'linear-gradient(to bottom, rgba(79, 79, 79, 1), rgba(29, 30, 36, 0))'}}>
              <img src={terra} alt="" />
              <p style={{color:'#FFAB07', fontSize:'18px', textShadow:'2px 2px 5px rgba(218, 218, 218, 0.25)'}}>{item.englishName}</p>
            </SwiperSlide>
        
        );
      })}
     </Swiper>
  );
}
