import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Modal from "react-bootstrap/Modal";
import { Input } from "antd";
import { Button } from "antd";

const findMoon = (data: object, id: string) => {
  return Object.entries(data).find((item: any) => item[0] === id);
};

export function DynamicTable() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [request, setRequest] = useState<boolean>(false);
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [result, setResult] =
    useState<
      [{ id: number; planet_reference: string; name: string; radio: number }]
    >();

  let idInput: any;
  let nameInput: any;
  let planetInput: any;
  let radioInput: any;

  let idInputedit = document.getElementById("id") as HTMLInputElement;
  let nameInputedit = document.getElementById("name") as HTMLInputElement;
  let planetInputedit = document.getElementById(
    "planet_reference"
  ) as HTMLInputElement;
  let radioInputedit = document.getElementById("radio") as HTMLInputElement;

  const api = async () => {
    const data = await fetch("/moons", {
      method: "GET",
      mode: "no-cors",
    });
    const jsonData = await data.json();
    console.log(jsonData.Moons.moons);
    setResult(jsonData.Moons.moons);

    setRequest(request);
  };

  useEffect(() => {
    api();
  }, [showModalAdd]);

  async function createMoons() {
    console.log("create moons init");

    await fetch("/moon/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idInput,
        name: nameInput,
        planet_reference: planetInput,
        radio: radioInput,
      }),
    });

    setRequest(!request)
    // api();
  }


  function handleChangeId(event: any) {
    idInput = event.target.value;
  }

  function handleChangeName(event: any) {
    nameInput = event.target.value;
  }

  function handleChangePlanet(event: any) {
    planetInput = event.target.value;
  }

  function handleChangeRadio(event: any) {
    radioInput = event.target.value;
  }

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>Listagem de luas</h3>
          <Button type="primary" onClick={() => setShowModalAdd(!showModalAdd)}>
            Adicionar
          </Button>
        </div>
        <div>
          <p>Cadastre, edite e exclua as luas do sistema solar.</p>
        </div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          show={showModalAdd}
          centered
        >
          <Modal.Header
            closeButton
            onClick={() => setShowModalAdd(!showModalAdd)}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              Cadastre Luas
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <label>ID</label>
                <Input
                  placeholder="ID"
                  id="create_id"
                  onChange={handleChangeId}
                />
              </div>

              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <label>Nome</label>
                <Input
                  placeholder="Nome"
                  id="create_name"
                  onChange={handleChangeName}
                />
              </div>

              <div className="col-md-6" style={{ marginTop: "10px" }}>
                <label>Planet reference</label>
                <Input
                  placeholder="Planeta referência"
                  id="create_planet_reference"
                  onChange={handleChangePlanet}
                />
              </div>

              <div className="col-md-6" style={{ marginTop: "15px" }}>
                <label>Radio</label>
                <Input
                  placeholder="Radio"
                  id="create_radio"
                  onChange={handleChangeRadio}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ border: "none", background: "#fdab09", color: "#fff" }}
              onClick={() => createMoons()}
            >
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.planet_reference}</td>
                <td>{item.radio}</td>
                <td>
                  <div className="d-flex">
                    <EditOutlined
                      style={{ marginRight: "20px" }}
                      onClick={() => {
                        setShowModal(!showModal);
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
            onClick={() => console.log("editando")}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DynamicTable;
