import { PageHeader } from "antd";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

let show = false;
const PageHeaderAstronauts: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
    }}
  >
    <div>
      <h4>Lista de Planetas</h4>
      <h6>Criação de Luas</h6>
    </div>
    <Button
      style={{ width: "99px", height: "48px" }}
      onClick={() => (show = !show)}
    >
      Criar
    </Button>
    <CenterModal show={show} />
  </div>
);

type CenterModalProps = {
  className?: string;
  size?: "lg";
  centered?: boolean;
  show?: boolean;
};

const CenterModal = ({ className, size, centered, show }: CenterModalProps) => {
  return (
    <Modal size={size} centered={centered} show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => (show ? (show = false) : (show = true))}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PageHeaderAstronauts;
