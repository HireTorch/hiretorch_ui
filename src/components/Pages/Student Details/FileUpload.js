import { UploadOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Upload ,Delete} from 'antd';


const FileUpload = () => (
  <Space>
    Upload Your Resume Here :
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <br/>
    <Popconfirm title="Are you sure upload this File?" okText="Yes" cancelText="No">        
      <Button type='primary '>Upload</Button>
    </Popconfirm>
    <Popconfirm title="Are you sure delete this File?" okText="Yes" cancelText="No">    
    <Button type='primary ' danger >Delete</Button>    
    </Popconfirm>
  </Space>
);
export default FileUpload;