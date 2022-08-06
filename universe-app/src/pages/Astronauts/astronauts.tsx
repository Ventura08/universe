import PageHeaderAstronauts from "../../components/Page-Header/page-header";
import DynamicTable from "../../components/Table/table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function Astronauts() {
    return (
        <section
            className="container"
            style={{ boxShadow: "2px 2px 4px gray" }}
        >
            <PageHeaderAstronauts />
            <DynamicTable />
        </section>
    );
}
