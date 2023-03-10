import { Descriptions } from "antd";
const StudentInfo = () => (
  <Descriptions title="Basic Info">
    <Descriptions.Item label="Student Name">Shubham Chavan</Descriptions.Item>
    <Descriptions.Item label="Phone">9876543210</Descriptions.Item>
    <Descriptions.Item label="Gender">Male</Descriptions.Item>
    <Descriptions.Item label="Date Of Birth">04/02/1997</Descriptions.Item>
    <Descriptions.Item label="College Name">INFOWAY CDAC</Descriptions.Item>
    <Descriptions.Item label="Course">PG-DAC</Descriptions.Item>
    <Descriptions.Item label="Student Email">
      Shubhamchavan@gmail.com
    </Descriptions.Item>
    <Descriptions.Item label="Address">Pune , Maharashtra.</Descriptions.Item>
    <Descriptions.Item label="Addhaar Number">
      {" "}
      2222 4444 6666 8888{" "}
    </Descriptions.Item>
    <hr />
  </Descriptions>
);
export default StudentInfo;
