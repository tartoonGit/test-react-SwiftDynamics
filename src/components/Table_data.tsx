import { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import {
  formSelector,
  removeForm,
  DataType,
  localCheck,
} from "./../store/slices/formSlice";
import { useAppDispatch } from "./../store/store";
import { useTranslation } from "react-i18next";

const Table_data = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(formSelector);
  const storedData: DataType[] = JSON.parse(
    localStorage.getItem("dataTable") || "[]"
  );
  useEffect(() => {
    dispatch(localCheck(storedData));
  }, []);

  const generateSorter =
    (dataIndex: "name" | "gender" | "tel" | "nationality") =>
    (a: DataType, b: DataType) => {
      const valueA = a[dataIndex].toLowerCase();
      const valueB = b[dataIndex].toLowerCase();

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    };

  const columns: ColumnsType<DataType> = [
    {
      title: t("form.name"),
      dataIndex: "name",
      sorter: generateSorter("name"),
    },
    {
      title: t("form.gender"),
      dataIndex: "gender",
      sorter: generateSorter("gender"),
    },
    {
      title: t("form.tel"),
      dataIndex: "tel",
      sorter: generateSorter("tel"),
    },
    {
      title: t("form.nationality"),
      dataIndex: "nationality",
      sorter: generateSorter("nationality"),
    },
    {
      title: t("form.system"),
      dataIndex: "system",
      render: (_: any, record: DataType) => (
        <a
          onClick={() => {
            dispatch(removeForm(record.key));
          }}
        >
          {t("form.delete")}
        </a>
      ),
    },
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <Table columns={columns} dataSource={formData.data} />
    </div>
  );
};

export default Table_data;
