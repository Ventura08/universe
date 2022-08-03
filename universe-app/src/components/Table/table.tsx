import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';

interface DataType {
  id: number;
  name: string;
  radio: number;
  planet_reference: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Planet',
    dataIndex: 'planet_reference',
    key: 'planet',
  },
  {
    title: 'Radio',
    dataIndex: 'radio',
    key: 'radio',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><EditOutlined /></a>
        <a><DeleteOutlined /></a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    "id": 1,
    "planet_reference": "Earth",
    "radio": 1737,
    "name": "Moon"
  },
  {
    "id": 2,
    "planet_reference": "Mars",
    "radio": 11267,
    "name": "Phobos"
  },
  {
    "id": 3,
    "planet_reference": "Jupiter",
    "radio": 13234,
    "name": "Io",
  },
  {
    "id": 4,
    "planet_reference": "Saturn",
    "radio": 1560,
    "name": "Europa",
  },
  {
    "id": 5,
    "planet_reference": "Uranus",
    "radio": 570,
    "name": "Ariel"
  },
  {
    "id": 6,
    "planet_reference": "Neptune",
    "radio": 87,
    "name": "Galatei"
  }
]

const DynamicTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default DynamicTable;