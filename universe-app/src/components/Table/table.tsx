import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
import { Input } from "antd";
import { Button } from "antd";

export function DynamicTable() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [result, setResult] =
    useState<
      [{ id: number; planet_reference: string; name: string; radio: number }]
    >();

  useEffect(() => {
    const api = async () => {
      const data = await fetch("/moons", {
        method: "GET",
        mode: "no-cors",
      });
      const jsonData = await data.json();
      setResult(jsonData.Moons.moons);
    };
    api();
  }, []);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Planet Reference</th>
            <th>Radio</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {result?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.planet_reference}</td>
                <td>{item.radio}</td>
                <td>
                  <div className="d-flex">
                    <EditOutlined
                      style={{ marginRight: "20px" }}
                      onClick={() => setShowModal(!showModal)}
                    />
                    <DeleteOutlined
                      style={{ marginRight: "20px" }}
                      onClick={() =>
                        fetch(`/moon/${item.id}/delete`, { method: "DELETE" })
                      }
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showModal}
        centered
      >
        <Modal.Header closeButton onClick={() => setShowModal(!showModal)}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edição de Luas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="form-moon" encType="multipart/form-data">
            <div className="row">
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <label>Nome</label>
                <Input placeholder="Nome" id="name" />
              </div>

              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <label>Planet reference</label>
                <Input placeholder="Planeta referência" id="planet_reference" />
              </div>

              <div className="col-md-6" style={{ marginTop: "15px" }}>
                <label>Radio</label>
                <Input placeholder="Radio" id="radio" />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ border: "none", background: "#fdab09", color: "#fff" }}
            onClick={() => console.log("Cachinhos")}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DynamicTable;
