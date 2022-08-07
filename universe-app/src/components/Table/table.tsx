import { Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useCallback, useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Table from "react-bootstrap/Table";

let myHeaders = {
  "Access-Control-Allow-Origin": true,
};

let myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

export function DynamicTable() {
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
      // console.log(
      //   Array.from(jsonData.Moons.moons).map((item) => {;
      //   })
      // );
      setResult(jsonData.Moons.moons);
    };
    api();
  }, []);
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Radio</th>
          <th>Orbit</th>
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
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DynamicTable;