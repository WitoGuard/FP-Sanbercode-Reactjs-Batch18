import React from "react";
import { Menu, Switch } from 'antd';
import { YoutubeOutlined , AppstoreOutlined, UserOutlined  } from '@ant-design/icons';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<YoutubeOutlined />} title="Movie">
            <Menu.Item key="1">Movie List</Menu.Item>
            <Menu.Item key="2">Movie Review</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Game">
            <Menu.Item key="5">Game List</Menu.Item>
            <Menu.Item key="6">Game Detail</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<UserOutlined />} title="User">
            <Menu.Item key="9">Login</Menu.Item>
            <Menu.Item key="10">Register</Menu.Item>
            <Menu.Item key="11">Change Password</Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}

export default Sider