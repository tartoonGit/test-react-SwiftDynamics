import React, { useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  tel: string;
  nationality: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ชื่อ",
    dataIndex: "name",
    sorter: (a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "เพศ",
    dataIndex: "gender",
    sorter: (a, b) => {
      const nameA = a.gender.toLowerCase();
      const nameB = b.gender.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "หมายเลขโทรศัพท์มือถือ",
    dataIndex: "tel",
    sorter: (a, b) => {
      const nameA = a.tel.toLowerCase();
      const nameB = b.tel.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "สัญชาติ",
    dataIndex: "nationality",
    sorter: (a, b) => {
      const nameA = a.nationality.toLowerCase();
      const nameB = b.nationality.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "จัดการ",
    dataIndex: "system",
    render: () => (
        <a>Delete</a>
    ),
  },
];

const data: DataType[] = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `การ์ตูน ${i}`,
//     gender: i%2 == 1 ? "ชาย":"หญิง",
//     tel: `+66 4864886842`,
//     nationality: "ไทย"
//   });
// }

const Table_data = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default Table_data;
