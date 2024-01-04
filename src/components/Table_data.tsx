import { useState, useEffect } from "react";
import { Button, Table, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useSelector } from "react-redux";
import {
  formSelector,
  removeForm,
  DataType,
  localCheck,
} from "./../store/slices/formSlice";
import { modeEditSelector } from "./../store/slices/modeEditSlice";
import { useAppDispatch } from "./../store/store";
import { useTranslation } from "react-i18next";
import { updateData } from "./../store/slices/updateDataSlice";

const Table_data = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(formSelector);
  const modeEdit = useSelector(modeEditSelector);
  const storedData: DataType[] = JSON.parse(
    localStorage.getItem("dataTable") || "[]"
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectAll, setSelectAll] = useState(false);
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
        <div>
          <a
            style={{ marginRight: "10px" }}
            onClick={() => {
              dispatch(updateData(record));
            }}
          >
            {t("form.edit")}
          </a>
          <a
            onClick={() => {
              dispatch(removeForm([record.key]));
            }}
            style={{
              pointerEvents: modeEdit.data ? "none" : "auto",
              color: modeEdit.data ? "gray" : "",
            }}
          >
            {t("form.delete")}
          </a>
        </div>
      ),
    },
  ];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys: selectAll
      ? formData.data.map((item) => item.key)
      : selectedRowKeys,
    onChange: onSelectChange,
  };
  const checkboxAll = (e: CheckboxChangeEvent) => {
    const allRowKeys = formData.data.map((item) => item.key);
    setSelectAll(e.target.checked);
    onSelectChange(e.target.checked ? allRowKeys : []);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Checkbox
          onChange={checkboxAll}
          checked={selectAll}
          indeterminate={!selectAll && selectedRowKeys.length > 0}
        >
          {t("form.selectall")}
        </Checkbox>
        <Button
          disabled={modeEdit.data}
          onClick={() =>
            dispatch(removeForm(selectedRowKeys.map((key) => Number(key))))
          }
        >
          {t("form.delete")}
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={formData.data}
      />
    </div>
  );
};

export default Table_data;
