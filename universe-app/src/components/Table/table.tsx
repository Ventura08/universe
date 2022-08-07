import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useCallback, useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PlanetService } from "../../services/PlanetService";

interface DataType {
  id: number;
  name: string;
  radio: number;
  planet_reference: string;
}

let myHeaders = {
  "Access-Control-Allow-Origin": true,
};

let myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Planet",
    dataIndex: "planet_reference",
    key: "planet",
  },
  {
    title: "Radio",
    dataIndex: "radio",
    key: "radio",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

// const data: DataType[] = [];

export function DynamicTable() {
  const [result, setResult] = useState<DataType[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:3001/moons", {
        method: "GET",
      });

      const jsonData = await data.json();
      await setResult(jsonData.results);
    };

    api();
  }, []);

  return <Table columns={columns} dataSource={result} />;
}

export default DynamicTable;
