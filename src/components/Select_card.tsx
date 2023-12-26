import { Card } from "antd";

const Select_card = (props: { title: string; content: string }) => {
  return (
    <Card title={props.title} style={{ width: 300 }}>
      <div>{props.content}</div>
    </Card>
  );
};

export default Select_card;
