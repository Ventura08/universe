import "swiper/css";
import { CenterDescription } from "../../components/CenterDescription/centerDescription";
import { Header } from "../../components/Header/header";
import logo from "../../assets/Logotipow.png";

export function PlanetsList() {
    return (
        <>
            <Header image={logo} />
            <section>
                <div>
                    <CenterDescription />
                </div>
            </section>
        </>
    );
}
