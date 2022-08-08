import { Button } from "antd";
import { Input } from "antd";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export function PageHeaderAstronauts() {
  const [showModal, setShowModal] = useState<boolean>(false);

  let idInput: any;
  let nameInput: any;
  let planetInput: any;
  let radioInput: any;

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
    <div style={{ padding: "10px" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Listagem de luas</h3>
        <Button type="primary" onClick={() => setShowModal(!showModal)}>
          Adicionar
        </Button>
      </div>
      <div>
        <p>Cadastre, edite e exclua as luas do sistema solar.</p>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showModal}
        centered
      >
        <Modal.Header closeButton onClick={() => setShowModal(!showModal)}>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastre Luas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <label>ID</label>
              <Input placeholder="ID" id="create_id" onChange={handleChangeId} />
            </div>

            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <label>Nome</label>
              <Input placeholder="Nome" id="create_name" onChange={handleChangeName} />
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
              <Input placeholder="Radio" id="create_radio" onChange={handleChangeRadio} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ border: "none", background: "#fdab09", color: "#fff" }}
            onClick={() =>
              fetch("/moon/create", {
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
              })
            }
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
