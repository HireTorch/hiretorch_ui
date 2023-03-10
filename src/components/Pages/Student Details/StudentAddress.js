import { Form, Row, Col, Input } from "antd";
import { useId, React } from "react";
import "./StudentAddress.css";

const StudentAddress = () => {
  const postTextAreaId = useId();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <Form
      layout="vertical"
      method="post"
      onSubmit={handleSubmit}
      hideRequiredMark
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="student Address"
            label="Student Address"
            rules={[
              {
                required: true,
                message: "Enter Your Address",
              },
            ]}
          >
            <Input placeholder="Please Enter Your Address" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="student address change"
            label="New Address "
            rules={[
              {
                required: true,
                message: "Enter Your Address ",
              },
            ]}
          >
            <Input placeholder="Please Enter Your New Address Here" />
          </Form.Item>
        </Col>
        <button type="reset">Reset edits</button>
        <button type="submit">Save Address</button>
      </Row>
    </Form>

    // <form method="post" onSubmit={handleSubmit}>
    //   <div className="text-align:right">
    //     <label>Student Address</label>
    //     <br />
    //     <input name="postTitle" placeholder="Enter Your Address" />
    //     <br />
    //     <label>
    //       Edit your Address: <br />
    //     </label>
    //     <br />
    //     <textarea
    //       name="postContent"
    //       placeholder="Enter Your New Address Here"
    //       rows={4}
    //       cols={40}
    //     />
    //
    //   </div>
    // </form>
  );
};

export default StudentAddress;
