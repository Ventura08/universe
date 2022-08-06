import "swiper/css";
import PageHeaderAstronauts from "../../components/Page-Header/page-header";
import DynamicTable from "../../components/Table/table";

export function Astronauts() {
  return (
   <section className="container" style={{boxShadow: '2px 2px 4px gray'}}>
     <PageHeaderAstronauts/>
     <DynamicTable/>
   </section>
  )
}
