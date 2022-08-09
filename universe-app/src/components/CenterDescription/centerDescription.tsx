import { useCallback, useEffect, useState } from "react";
import { Planets } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PlanetService } from "../../services/PlanetService";
import Earth from "../../assets/earth.png";
import Saturn from "../../assets/saturn.png";
import Mars from "../../assets/mars.png";
import Neptune from "../../assets/neptune.png";
import Uranus from "../../assets/uranus.png";
import Jupiter from "../../assets/jupiter.png";
import Mercury from "../../assets/mercury.png";
import Venus from "../../assets/venus.png";
import { Spin } from "antd";
import "antd/dist/antd.css";

export function CenterDescription() {
  const [currentWidthScreen, setCurrentWidthScreen] = useState(0);
  const [planets, setPlanets] = useState<{ bodies: Planets[] }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [planetCenterDescription, setPlanetCenterDescription] = useState<Planets>();

  let filterPlanet = planets?.bodies.filter((item) => item.isPlanet === true);
  let image = null;
  const isSlidePerViewAvaliable = currentWidthScreen > 1000 ? 4 : 2;

  useEffect(() => {
    setCurrentWidthScreen(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setCurrentWidthScreen(window.innerWidth)
    );
  }, []);

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
    switch (name) {
      case "Uranus":
        return Uranus;
      case "Neptune":
        return Neptune;
      case "Jupiter":
        return Jupiter;
      case "Mars":
        return Mars;
      case "Mercury":
        return Mercury;
      case "Earth":
        return Earth;
      case "Venus":
        return Venus;
      case "Saturn":
        return Saturn;
      default :
      return Earth
    }
  }

  function selectPlanet(id: string) {
    let planetCurrent = filterPlanet?.find((item) => item.id === id); 
    console.log(planetCurrent)
    setPlanetCenterDescription(planetCurrent);
  }


  return (
    <div>
      <section
        className="row w-100 m-0"
        style={{ padding: "50px", background: "#161616" }}
      >
        <div className="col-md-7" style={{ color: "#ffff", padding: "50px" }}>
          <h2 style={{ color: "#FFAB07", fontSize: "60px" }}>The {planetCenterDescription?.englishName || 'Earth'}</h2>
          <p style={{ width: "70%", fontSize: "20px" }}>
            {planetCenterDescription?.englishName || 'Earth' } é um planeta do nosso sitema solar que
            possui uma inclinação de {planetCenterDescription?.inclination || '0'}, 
            gravidade de {planetCenterDescription?.gravity || '9.8'}, 
            órbita de {planetCenterDescription?.sideralOrbit || '365.256'} e {planetCenterDescription?.moons !== null ? planetCenterDescription?.moons.length || '1' : '0' } luas.
          </p>

          <p style={{ width: "70%", fontSize: "20px" }}>
          Para explorar mais informações sobre o planeta, clique no botão abaixo ou selecione outros planetas.
          </p>

          <button
            style={{
              width: "300px",
              height: "60px",
              background: "#FFAB07",
              border: "none",
              borderRadius: "20px",
              marginTop: "32px",
              fontSize: "20px",
            }}
          >
            Saiba mais
          </button>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <img style={{width:'80%', height:'100%', objectFit:'contain'}} className="" src={checkImage(String(planetCenterDescription?.englishName))} alt="" />
        </div>
      </section>

      {!loading ? (
        <Swiper
          style={{
            background: "#1D1E24",
            padding: "40px 24px 40px 24px",
            height: "100%",
          }}
          spaceBetween={50}
          slidesPerView={isSlidePerViewAvaliable}
        >
          {filterPlanet?.map((item) => {
            image = checkImage(item.englishName);
            return (
              <SwiperSlide
                onClick={() => selectPlanet(item.id)}
                key={item.id}
                className="d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid #AEAEAE",
                  borderRadius: "40px",
                  flexDirection: "column",
                  background:
                    "linear-gradient(to bottom, rgba(79, 79, 79, 1), rgba(29, 30, 36, 0))",
                  height: "320px",
                  zIndex: "2",
                  cursor: "pointer",
                }}
              >
                <img
                  src={image}
                  alt=""
                  style={
                    item.englishName === "Saturn"
                      ? {
                          marginTop: "-24px",
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                        }
                      : {
                          marginTop: "-24px",
                          width: "60%",
                          height: "70%",
                          objectFit: "contain",
                        }
                  }
                />
                <p
                  style={{
                    color: "#FFAB07",
                    fontSize: "24px",
                    textShadow: "2px 2px 5px rgba(218, 218, 218, 0.25)",
                    paddingTop: "10px",
                  }}
                >
                  {item.englishName}
                </p>
                <div
                  className="d-flex justify-content-around flex-wrap w-100"
                  style={{
                    color: "#FFFF",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <p style={{ margin: 0, padding: 0 }}>Massa</p>
                    <span>{item.gravity}</span>
                  </div>
                  <div>
                    <p style={{ margin: 0, padding: 0 }}>Orbita</p>
                    <span>{item.sideralOrbit}</span>
                  </div>
                  <div>
                    <p style={{ margin: 0, padding: 0 }}>Inclinação</p>
                    <span>{item.inclination}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "20px" }}
        >
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}
