import "./Form_data.scss";
import { Select, Input, DatePicker, Radio, Form, Space, Button } from "antd";
import { useSelector } from "react-redux";
import { runes } from "runes2";
import { formSelector } from "./../store/slices/formSlice";

const Form_data = () => {
  const formData = useSelector(formSelector);
  const onFinish = (values: any) => {
    console.log("Success:", values);
    formData.data.push({
      key: formData.data.length,
      name: `${values.prefix} ${values.fname} ${values.lname}`,
      gender: values.gender,
      code: values.code,
      tel: values.tel,
      nationality: values.nationality,
      idcard: `${values.idcard1}${values.idcard2}${values.idcard3}${values.idcard4}${values.idcard}`,
      salary: values.salary,
      date: values.date.$d,
      passport: values.passport,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //reset form
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
              { value: "นาย", label: "นาย" },
              { value: "นาง", label: "นาง" },
              { value: "นางสาว", label: "นางสาว" },
            ]}
            placeholder="คำนำหน้า"
          />
        </Form.Item>
        <Form.Item
          label="ชื่อจริง"
          name="fname"
          rules={[{ required: true, message: "กรุณาใส่ชื่อจริง !" }]}
        >
          <Input style={{ width: 250, margin: "10px" }} />
        </Form.Item>
        <Form.Item
          label="นามสกุล"
          name="lname"
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
          <DatePicker style={{ margin: "10px" }} />
        </Form.Item>
        <Form.Item
          label="สัญชาติ"
          name="nationality"
          rules={[{ required: true, message: "กรุณาใส่วันเกิด !" }]}
        >
          <Select
            style={{ width: 300, margin: "10px" }}
            options={[
              { value: "ไทย", label: "ไทย" },
              { value: "จีน", label: "จีน" },
              { value: "อังกฤษ", label: "อังกฤษ" },
            ]}
            placeholder="-- กรุณาเลือก --"
          />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="เลขบัตรประชาชน"
          name="idcard1"
          rules={[
            {
              required: true,
              len: 1,
              message: "กรุณาใส่ให้ครบ 1 ตัว !",
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
              message: "กรุณาใส่ให้ครบ 4 ตัว !",
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
              message: "กรุณาใส่ให้ครบ 5 ตัว !",
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
              message: "กรุณาใส่ให้ครบ 2 ตัว !",
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
              message: "กรุณาใส่เลขบัตรประชาชนในช่องนี้ให้ครบ 1 ตัว !",
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
          label="เพศ"
          name="gender"
          rules={[{ required: true, message: "กรุณาเลือกเพศ !" }]}
        >
          <Radio.Group style={{ margin: "10px" }}>
            <Radio value={"ชาย"}>ชาย</Radio>
            <Radio value={"หญิง"}>หญิง</Radio>
            <Radio value={"ไม่ระบุ"}>ไม่ระบุ</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="หมายเลขโทรศัพท์มือถือ"
          name="code"
          rules={[
            { required: true, message: "กรุณาใส่รหัสหมายเลขโทรศัพท์มือถือ !" },
          ]}
        >
          <Select
            style={{ width: 80, margin: "10px" }}
            options={[{ value: "+66", label: "+66" }]}
          />
        </Form.Item>
        -
        <Form.Item
          name="tel"
          rules={[
            { required: true, message: "กรุณาใส่หมายเลขโทรศัพท์มือถือ !" },
          ]}
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
