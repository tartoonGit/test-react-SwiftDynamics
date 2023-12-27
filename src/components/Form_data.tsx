import "./Form_data.scss";
import { useState } from "react";
import type { DatePickerProps, RadioChangeEvent } from "antd";
import { Select, Input, DatePicker, Radio, Form, Space, Button } from "antd";

const Form_data = () => {
  const onDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const [value, setValue] = useState(1);

  const onRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      className="form-border"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div>
        <Form.Item
          label="คำนำหน้า"
          name="prefix"
          rules={[{ required: true, message: "กรุณาใส่คำนำหน้า !" }]}
        >
          <Select
            style={{ width: 100, margin: "10px" }}
            options={[
              { value: "lucy", label: "นาย" },
              { value: "lucy", label: "นาง" },
              { value: "lucy", label: "นางสาว" },
            ]}
            placeholder="คำนำหน้า"
          />
        </Form.Item>
        <Form.Item
          label="ชื่อจริง"
          name="name"
          rules={[{ required: true, message: "กรุณาใส่ชื่อจริง !" }]}
        >
          <Input style={{ width: 250, margin: "10px" }} />
        </Form.Item>
        <Form.Item
          label="นามสกุล"
          name="lastname"
          rules={[{ required: true, message: "กรุณาใส่นามสกุล !" }]}
        >
          <Input style={{ width: 250, margin: "10px" }} />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="วันเกิด"
          name="date"
          rules={[{ required: true, message: "กรุณาใส่วันเกิด !" }]}
        >
          <DatePicker style={{ margin: "10px" }} onChange={onDate} />
        </Form.Item>
        <Form.Item
          label="สัญชาติ"
          name="nationality"
          rules={[{ required: true, message: "กรุณาใส่วันเกิด !" }]}
        >
          <Select
            style={{ width: 300, margin: "10px" }}
            options={[
              { value: "lucy", label: "ไทย" },
              { value: "lucy", label: "จีน" },
              { value: "lucy", label: "อังกฤษ" },
            ]}
            placeholder="-- กรุณาเลือก --"
          />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="เลขบัตรประชาชน"
          name="idcard"
          rules={[{ required: true, message: "กรุณาใส่เลขบัตรประชาชน !" }]}
        >
          <Input style={{ width: 50, margin: "10px" }} />-
          <Input style={{ width: 150, margin: "10px" }} />-
          <Input style={{ width: 150, margin: "10px" }} />-
          <Input style={{ width: 150, margin: "10px" }} />-
          <Input style={{ width: 50, margin: "10px" }} />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="เพศ"
          name="gender"
          rules={[{ required: true, message: "กรุณาเลือกเพศ !" }]}
        >
          <Radio.Group
            onChange={onRadio}
            value={value}
            style={{ margin: "10px" }}
          >
            <Radio value={"Man"}>ชาย</Radio>
            <Radio value={"Woman"}>หญิง</Radio>
            <Radio value={"None"}>ไม่ระบุ</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="หมายเลขโทรศัพท์มือถือ"
          name="tel"
          rules={[
            { required: true, message: "กรุณาใส่หมายเลขโทรศัพท์มือถือ !" },
          ]}
        >
          <Select
            style={{ width: 80, margin: "10px" }}
            options={[{ value: "lucy", label: "+66" }]}
          />
          -
          <Input style={{ width: 250, margin: "10px" }} />
        </Form.Item>
      </div>
      <div>
        <Form.Item label="หนังสือเดินทาง" name="passport">
          <Input style={{ width: 250, margin: "10px" }} />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="เงินเดือนที่คาดหวัง"
          name="salary"
          rules={[{ required: true, message: "เงินเดือนที่คาดหวัง !" }]}
        >
          <Input style={{ width: 250, margin: "10px" }} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button htmlType="button" onClick={onReset}>
              ล้างข้อมูล
            </Button>
            <Button htmlType="submit">ส่งข้อมูล</Button>
          </Space>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Form_data;
