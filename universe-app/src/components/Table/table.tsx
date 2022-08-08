import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
import { Input } from "antd";
import { Button } from "antd";

const findMoon = (data: object,id: string) => {
  // console.log(Object.entries(data).find(item => item[0] == id));  
  return Object.entries(data).find(item => item[0] == id);
}

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
  let idInput = document.getElementById("id") as HTMLInputElement;
  let nameInput = document.getElementById("name") as HTMLInputElement;
  let planetInput = document.getElementById(
    "planet_reference"
  ) as HTMLInputElement;
  let radioInput = document.getElementById("radio") as HTMLInputElement;
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
                      onClick={() => {
                        setShowModal(!showModal)
                        const data = findMoon(result, String(item.id))!
                        idInput.value = data[1].id
                        nameInput.value = data[1].name
                        planetInput.value = data[1].planet_reference
                        radioInput.value = data[1].radio
                      }}
                    />
                    <DeleteOutlined
                      style={{ marginRight: "20px" }}
                      onClick={async () =>
                        await fetch(`/moon/${item.id}/delete`, {
                          method: "DELETE",
                        })
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
              <label>ID</label>
              <Input placeholder="ID" id="create_id" />
          </div>
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
