import { Button } from "antd";
import { Input } from "antd";
import { Console } from "console";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
export function PageHeaderAstronauts() {
  const [showModal, setShowModal] = useState<boolean>(false);

  let nameInput = document.getElementById("create_name") as HTMLInputElement;
  let planetInput = document.getElementById(
    "create_planet_reference"
  ) as HTMLInputElement;
  let radioInput = document.getElementById("create_radio") as HTMLInputElement;
  let data = {
    name: nameInput?.value,
    planet_reference: planetInput?.value,
    radio: radioInput?.value,
  };

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
              <label>Nome</label>
              <Input placeholder="Nome" id="create_name" />
            </div>

            <div className="col-md-6" style={{ marginTop: "10px" }}>
              <label>Planet reference</label>
              <Input
                placeholder="Planeta referência"
                id="create_planet_reference"
              />
            </div>

            <div className="col-md-6" style={{ marginTop: "15px" }}>
              <label>Radio</label>
              <Input placeholder="Radio" id="create_radio" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ border: "none", background: "#fdab09", color: "#fff" }}
            onClick={() =>
              fetch("/moon/create", {
                method: "POST",
                body: JSON.stringify({
                  name: nameInput?.value,
                  planet_reference: planetInput?.value,
                  radio: radioInput?.value,
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
