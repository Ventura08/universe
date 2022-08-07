import "swiper/css";
import DynamicTable from "../../components/Table/table";
import {PageHeaderAstronauts} from '../../components/Page-Header/page-header'

export function Astronauts() {
  return (
   <section className="container" style={{boxShadow: '2px 2px 4px gray', margin:'15px auto'}}>
        <PageHeaderAstronauts/>
        <DynamicTable/>
   </section>
  )
}
