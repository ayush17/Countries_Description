import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;

class Searchfilter extends Component {
   
    state = {  }
     handleMenuClick=(e)=> {
        message.info('Click on menu item.');
        e.preventDefault();
        console.log('click', e);
      }
    render() { 
        const menu = (
            <Menu onClick={this.props.handleSearchCountryByRegion}>
              <Menu.Item key="1">
                Africa
              </Menu.Item>
              <Menu.Item key="2">
                Americas
              </Menu.Item>
              <Menu.Item key="3">
                Asia
              </Menu.Item>
              <Menu.Item key="3">
              Europe
              </Menu.Item>
              <Menu.Item key="3">
              Oceania
              </Menu.Item>
            </Menu>
          );
        return ( <div style={{padding:"0vw 4vw 0vw 4vw"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <Search
            placeholder="input search text"
            onSearch={value => this.props.handleSearchCounrty(value)}
            style={{ width: 200 }}
          />
           <Dropdown overlay={menu}>
      <Button>
       Filter by Region <DownOutlined />
      </Button>
    </Dropdown>
    </div>
          </div>);
    }
}
 
export default Searchfilter;