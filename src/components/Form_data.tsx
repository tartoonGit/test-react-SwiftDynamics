import "./Form_data.scss";
import { Select, Input, DatePicker, Radio, Form, Space, Button } from "antd";
import { useSelector } from "react-redux";
import { runes } from "runes2";
import { addForm, formSelector, updateForm } from "./../store/slices/formSlice";
import {
  updateDataSelector,
  resetData,
} from "./../store/slices/updateDataSlice";
import { modeEditSelector, setModeEdit } from "./../store/slices/modeEditSlice";
import { useAppDispatch } from "./../store/store";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import dayjs from "dayjs";

const Form_data = () => {
  const { t } = useTranslation();
  const formData = useSelector(formSelector);
  const updateData = useSelector(updateDataSelector);
  const modeEdit = useSelector(modeEditSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (updateData.data.key >= 0) {
      dispatch(setModeEdit(true));
      form.setFieldsValue({
        prefix: updateData.data.name.split(" ")[0],
        fname: updateData.data.name.split(" ")[1],
        lname: updateData.data.name.split(" ")[2],
        date: dayjs(updateData.data.date),
        nationality: updateData.data.nationality,
        idcard1: updateData.data.idcard.split("-")[0],
        idcard2: updateData.data.idcard.split("-")[1],
        idcard3: updateData.data.idcard.split("-")[2],
        idcard4: updateData.data.idcard.split("-")[3],
        idcard5: updateData.data.idcard.split("-")[4],
        gender: updateData.data.gender,
        code: updateData.data.code,
        tel: updateData.data.tel,
        passport: updateData.data.passport,
        salary: updateData.data.salary,
      });
    }
  }, [updateData]);

  const onFinish = (values: any) => {
    const result = {
      key:
        formData.data.length > 0
          ? formData.data[formData.data.length - 1].key + 1
          : 0,
      name: `${values.prefix} ${values.fname} ${values.lname}`,
      gender: values.gender,
      code: values.code,
      tel: values.tel,
      nationality: values.nationality,
      idcard: `${values.idcard1}-${values.idcard2}-${values.idcard3}-${values.idcard4}-${values.idcard5}`,
      salary: values.salary,
      date: values.date.$d.toLocaleString(),
      passport: values.passport,
    };
    if (modeEdit.data) {
      result.key = updateData.data.key;
      dispatch(updateForm(result));
    } else {
      dispatch(addForm(result));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  //reset form
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    if (modeEdit.data) {
      dispatch(setModeEdit(false));
      dispatch(resetData());
    }
  };

  return (
    <div>
      {modeEdit.data && <h3>{t("form.edit")}</h3>}
      <Form
        className="form-border"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div>
          <Form.Item
            label={t("form.prefix")}
            name="prefix"
            rules={[{ required: true, message: t("validate.prefix") }]}
          >
            <Select
              style={{ width: 100, margin: "10px" }}
              options={[
                { value: "นาย", label: t("form.mr") },
                { value: "นาง", label: t("form.mrs") },
                { value: "นางสาว", label: t("form.ms") },
              ]}
              placeholder={t("form.prefix")}
            />
          </Form.Item>
          <Form.Item
            label={t("form.fname")}
            name="fname"
            rules={[{ required: true, message: t("validate.fname") }]}
          >
            <Input style={{ width: 250, margin: "10px" }} />
          </Form.Item>
          <Form.Item
            label={t("form.lname")}
            name="lname"
            rules={[{ required: true, message: t("validate.lname") }]}
          >
            <Input style={{ width: 250, margin: "10px" }} />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={t("form.date")}
            name="date"
            rules={[{ required: true, message: t("validate.lname") }]}
          >
            <DatePicker
              style={{ margin: "10px" }}
              placeholder={t("form.dateformat")}
              format="MM/DD/YYYY"
            />
          </Form.Item>
          <Form.Item
            label={t("form.nationality")}
            name="nationality"
            rules={[{ required: true, message: t("validate.nationality") }]}
          >
            <Select
              style={{ width: 300, margin: "10px" }}
              options={[
                { value: "ไทย", label: t("form.th") },
                { value: "จีน", label: t("form.ch") },
                { value: "อังกฤษ", label: t("form.en") },
              ]}
              placeholder={`-- ${t("form.select")} --`}
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={t("form.idcard")}
            name="idcard1"
            rules={[
              {
                required: true,
                len: 1,
                message: t("validate.idcard1"),
              },
            ]}
          >
            <Input
              count={{
                max: 1,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
              style={{ width: 80, margin: "10px" }}
            />
          </Form.Item>
          -
          <Form.Item
            name="idcard2"
            rules={[
              {
                required: true,
                len: 4,
                message: t("validate.idcard4"),
              },
            ]}
          >
            <Input
              count={{
                max: 4,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
              style={{ width: 100, margin: "10px" }}
            />
          </Form.Item>
          -
          <Form.Item
            name="idcard3"
            rules={[
              {
                required: true,
                len: 5,
                message: t("validate.idcard5"),
              },
            ]}
          >
            <Input
              count={{
                max: 5,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
              style={{ width: 110, margin: "10px" }}
            />
          </Form.Item>
          -
          <Form.Item
            name="idcard4"
            rules={[
              {
                required: true,
                len: 2,
                message: t("validate.idcard2"),
              },
            ]}
          >
            <Input
              count={{
                max: 2,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
              style={{ width: 80, margin: "10px" }}
            />
          </Form.Item>
          -
          <Form.Item
            name="idcard5"
            rules={[
              {
                required: true,
                len: 1,
                message: t("validate.idcard1"),
              },
            ]}
          >
            <Input
              count={{
                max: 1,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
              style={{ width: 80, margin: "10px" }}
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={t("form.gender")}
            name="gender"
            rules={[{ required: true, message: t("validate.gender") }]}
          >
            <Radio.Group style={{ margin: "10px" }}>
              <Radio value={"ชาย"}>{t("form.male")}</Radio>
              <Radio value={"หญิง"}>{t("form.female")}</Radio>
              <Radio value={"ไม่ระบุ"}>{t("form.not_specified")}</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={t("form.tel")}
            name="code"
            rules={[{ required: true, message: t("validate.code") }]}
          >
            <Select
              style={{ width: 80, margin: "10px" }}
              options={[{ value: "+66", label: "+66" }]}
            />
          </Form.Item>
          -
          <Form.Item
            name="tel"
            rules={[{ required: true, message: t("validate.tel") }]}
          >
            <Input
              style={{ width: 250, margin: "10px" }}
              count={{
                max: 10,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item label={t("form.passport")} name="passport">
            <Input style={{ width: 250, margin: "10px" }} />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label={t("form.salary")}
            name="salary"
            rules={[{ required: true, message: t("validate.salary") }]}
          >
            <Input style={{ width: 250, margin: "10px" }} />
          </Form.Item>
          <Form.Item>
            {modeEdit.data ? (
              <Space>
                <Button htmlType="button" onClick={onReset}>
                  {t("form.button_cancel")}
                </Button>
                <Button htmlType="submit">{t("form.button_enter")}</Button>
              </Space>
            ) : (
              <Space>
                <Button htmlType="button" onClick={onReset}>
                  {t("form.button_reset")}
                </Button>
                <Button htmlType="submit">{t("form.button_sent")}</Button>
              </Space>
            )}
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Form_data;
