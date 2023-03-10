import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import './StudentQualification.css'
import { useState,useEffect } from 'react';
const { Option } = Select;



const StudentQualification = () => {

  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };
 
  useEffect(() => {
    document.title = "Student-Profile || Hire-Torch "
  }, []);

  const handleSubmit =  (e) => {
    e.preventDefault();
  }
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Qualifications
      </Button>
      <Drawer
        title="Add Qualification"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>

              <Form.Item
                name="name"
                label="School & Institute Name"
                rules={[
                  {
                    required: true,
                    message: 'Select School & Institute Name',
                  },
                ]}
              >
                <Input placeholder="Please enter School & Institute Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="owner"
                label="Degree"
                rules={[
                  {
                    required: true,
                    message: 'Please select Qualification Level',
                  },
                ]}
              >
                <Select placeholder="Please select Qualification Level">
                  <Option value="SSC/10TH/CBSE">SSC/10TH/CBSE</Option>
                  <Option value="HSC/12TH">HSC/12TH</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="stream"
                label="Stream"
                rules={[
                  {
                    required: true,
                    message: 'Please select the Stream',
                  },
                ]}
              >
                <Select placeholder="Please select the Stream">
                  <Option value="Science"></Option>
                  <Option value="Commerce">Commerce</Option>
                  <Option value="Arts">Arts</Option>
                  <Option value="General">General</Option>   
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name=""
                label="Board/University"
                rules={[
                  {
                    required: true,
                    message: 'Please select the board/University',
                  },
                ]}
              >
                <Select placeholder="Please select the board">
                  <Option value="Kolhapur University">Kolhapur University</Option>
                  <Option value="Pune University">Pune University</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="education-type"
                label="Education Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Education Type',
                  },
                ]}
              >
                <Select placeholder="Please choose the Education Type">
                  <Option value="Full Time">Full Time</Option>
                  <Option value="Part Time">Part Time</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="project details"
                label="Project Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter your project description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter project description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default StudentQualification;