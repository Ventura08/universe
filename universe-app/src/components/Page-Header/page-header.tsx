import { Button } from "antd";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
export function PageHeaderAstronauts() {
  const [showModal, setShowModal] = useState<boolean>(false);
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
            Cadastrar Lua
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Cadastre sua lua</h4>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}