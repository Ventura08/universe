import { Button } from "antd";

export function PageHeaderAstronauts() {
  return (
    <div style={{ padding: "10px" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Listagem de luas</h3>
        <Button type="primary">Adicionar</Button>
      </div>
      <div>
        <p>Cadastre, edite e exclua as luas do sistema solar.</p>
      </div>
    </div>
  );
}
