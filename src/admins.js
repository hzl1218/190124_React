import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
import "./admins.css"
class Admins extends React.Component{
    constructor(){
        super()
    }
    render(){    
        return(
            <div className="zy">
              <h1 style={{"fontSize":"40px","fontWeight":"bold","textAlign":"center","paddingTop":"20px"}}>用户登录</h1>
               <div style={{"width":"300px","margin":"0 auto","paddingTop":"20px"}}>
               <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{"width":"300px"}}>
                      登录
                    </Button>
                  </Form.Item>
              </Form>
               </div>
            </div>
        )
    }
}
export default Admins;